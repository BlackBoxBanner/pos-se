import { register } from '@/utils/auth/session'
import { prismaMock } from '../../singleton'
import { User } from '@prisma/client'

describe('register', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	const user: User = {
		email: 'example@email.com',
		name: 'John',
		password: 'password',
		id: '1',
		role: 'EMPLOYEE',
		createAt: new Date(),
		updatedAt: new Date(),
	}

	it('should return an error when no email is provided', async () => {
		await expect(
			register(
				{
					email: '',
					name: user.name,
					password: user.password,
					repeat_password: user.password,
				},
				'EMPLOYEE',
			),
		).rejects.toThrow('No email provided')
	})

	it('should return an error when no password is provided', async () => {
		await expect(
			register(
				{
					email: user.email,
					name: user.name,
					password: '',
					repeat_password: user.password,
				},
				'EMPLOYEE',
			),
		).rejects.toThrow('No password provided')
	})

	it('should return an error when no repeat_password is provided', async () => {
		await expect(
			register(
				{
					email: user.email,
					name: user.name,
					password: user.password,
					repeat_password: '',
				},
				'EMPLOYEE',
			),
		).rejects.toThrow('No repeat password provided')
	})

	it('should return an error when no name is provided', async () => {
		await expect(
			register(
				{
					email: user.email,
					name: '',
					password: user.password,
					repeat_password: user.password,
				},
				'EMPLOYEE',
			),
		).rejects.toThrow('No name provided')
	})

	it('should return an error when password is not match repeat_password', async () => {
		await expect(
			register(
				{
					email: user.email,
					name: user.name,
					password: user.password,
					repeat_password: 'wrongpassword',
				},
				'EMPLOYEE',
			),
		).rejects.toThrow('Password mismatch')
	})

	it('should return an error when the emails is already exist', async () => {
		prismaMock.user.findMany.mockResolvedValue([user])

		await expect(
			register(
				{
					email: user.email,
					name: user.name,
					password: user.password,
					repeat_password: user.password,
				},
				'EMPLOYEE',
			),
		).rejects.toThrow('Email already exists')
	})

	it('should return success', async () => {
		prismaMock.user.findMany.mockResolvedValue([])
		prismaMock.user.create.mockResolvedValue(user)

		await expect(
			register(
				{
					email: user.email,
					name: user.name,
					password: user.password,
					repeat_password: user.password,
				},
				'EMPLOYEE',
			),
		).resolves.toBe(user)
	}, 20000)

	it('should return success with owner role', async () => {
		prismaMock.user.findMany.mockResolvedValue([])
		const owner: User = {
			id: user.id,
			email: user.email,
			name: user.name,
			password: user.password,
			role: 'OWNER',
			createAt: user.createAt,
			updatedAt: user.updatedAt,
		}
		prismaMock.user.create.mockResolvedValue(owner)

		await expect(
			register(
				{
					email: owner.email,
					name: owner.name,
					password: owner.password,
					repeat_password: owner.password,
				},
				'OWNER',
			),
		).resolves.toBe(owner)
	}, 20000)
})
