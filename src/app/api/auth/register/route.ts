import { NextRequest, NextResponse } from 'next/server'
import { RegisterProps, register } from '@/utils/auth/session'
import { Role } from '@prisma/client'

export type BodyProps = {
	data: RegisterProps
	role: Role
}

export async function POST(request: NextRequest) {
	// get all headers
	const requestHeaders = new Headers(request.headers)
	// get header name "Authorization"
	const auth = requestHeaders.get('Authorization')

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
