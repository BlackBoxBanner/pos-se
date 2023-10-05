import { NextResponse } from 'next/server'
import { RegisterProps, register } from '@/utils/auth/session'
import { Role } from '@prisma/client'

export type BodyProps = {
	data: RegisterProps
	role: Role
}

export async function POST(request: Request) {
	// get all headers
	const requestHeaders = new Headers(request.headers)
	// get header name "Authorization"
	const auth = requestHeaders.get('Authorization')

	// get body out of body
	const {
		data: { email, password, repeat_password, name },
		role,
	} = (await request.json()) as BodyProps

	// register
	const registerRes = await register(
		{
			email,
			password,
			name,
			repeat_password,
		},
		role,
	)

	// check if registerRes is type Error
	if (registerRes instanceof Error) {
		return NextResponse.json(registerRes.message, {
			status: 400,
		})
	}

	// return registerRes
	return NextResponse.json({ data: registerRes })
}
