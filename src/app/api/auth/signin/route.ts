import { NextResponse } from 'next/server'
import { LoginType, login } from '@/utils/auth/session'

export async function POST(request: Request) {
	// get all headers
	const requestHeaders = new Headers(request.headers)
	// get header name "Authorization"
	const auth = requestHeaders.get('Authorization')

	// get body out of request data
	const { email, password } = (await request.json()) as LoginType

	// login
	const user = await login({ email, password })

	// check if users is not type of Error
	if (user instanceof Error) {
		return NextResponse.json(user.message, {
			status: 400,
		})
	}

	// return user
	return NextResponse.json({ data: user })
}
