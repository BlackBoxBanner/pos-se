import { NextRequest, NextResponse } from 'next/server'
import { RegisterProps, register } from '@/controller/auth/session'
import { Role } from '@prisma/client'
import { apiAuth } from '@/utils/auth'

export type BodyProps = {
	data: RegisterProps
	role: Role
}

export async function POST(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	// get body out of body
	const {
		data: { email, password, repeat_password, name },
		role,
	} = (await request.json()) as BodyProps

	try {
		return NextResponse.json(
			await register(
				{
					email,
					password,
					name,
					repeat_password,
				},
				role,
			),
		)
	} catch (error: unknown) {
		// check if registerRes is type Error
		if (error instanceof Error) {
			return NextResponse.json(error.message, {
				status: 400,
			})
		}
	}
}
