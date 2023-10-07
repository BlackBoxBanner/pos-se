import prisma from '@/utils/prisma'
import { compare, hash } from 'bcrypt'
import { cCreate, cDelete, cRead } from '../cookie'
import { Role, User } from '@prisma/client'

export interface Session {
	id: string
	email: string
	name: string
	role: Role
}

export async function useServerSession(): Promise<Session | null> {
	// read cookie "SimpleAuth"
	return cRead<Session>('SimpleAuth')
}

export type RegisterProps = Pick<User, 'name' | 'email' | 'password'> & {
	repeat_password: string
}

type Register = (data: RegisterProps, role?: Role) => Promise<Error | User>

export const register: Register = async (
	{ email, name, password, repeat_password },
	role = 'EMPLOYEE',
) => {
	//validate if data is missing
	if (!email) throw new Error('No email provided')
	if (!password) throw new Error('No password provided')
	if (!repeat_password) throw new Error('No repeat password provided')
	if (!name) throw new Error('No name provided')
	if (password != repeat_password) throw new Error('Password mismatch')

	// get all user from database
	const users = await getUsers()

	// using reduce to get all email from  into one array.
	const emails = users.reduce((resut, next) => {
		return [...resut, next.email]
	}, [] as string[])

	// return error if email is taken by others users.
	if (emails.includes(email)) throw new Error('Email already exists')

	try {

		// try to create user
		return await prisma.user.create({
			data: {
				email,
				name,
				password: await hash(password, 10),
				role: role,
			},
		})
	} catch (error) {
		console.log("running error");

		// catch any error if there is one.
		throw new Error('Could not register')
	}
}

export type LoginType = Pick<User, 'email' | 'password'>

export async function login({ password, email }: LoginType) {
	//validate if data is missing
	if (!email) throw new Error('No email provided')
	if (!password) throw new Error('No password provided')

	// get user from database that has email like props.
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	// return error if there is no user.
	if (!user) throw new Error('Invalid user')

	// compare if password from database is match with props else return error
	if (!(await compare(password, user.password)))
		throw new Error('Invalid password')

	// create SimpleAuth cookie store session
	await cCreate<Session>({
		name: 'SimpleAuth',
		value: {
			id: user.id,
			email: user.email,
			name: user.name,
			role: user.role,
		},
	})

	// return user session
	return user
}

export async function logout() {
	// deleting "SimpleAuth" cookie
	await cDelete('SimpleAuth')
}

export type DeleteUserProps = {
	id: string
}
type DeleteUser = (props?: DeleteUserProps) => Promise<void>
export const deleteUser: DeleteUser = async (props) => {
	await prisma.user.deleteMany({
		where: {
			id: props?.id
		}
	})
}


export const getUsers = async () => {
	return await prisma.user.findMany({})
}