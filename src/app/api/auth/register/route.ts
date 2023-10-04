import { NextResponse } from 'next/server'
import { RegisterProps, register } from '@/utils/auth/session'

interface PostBody {
	name: string
	email: string
	password: string
	passwordConfirm: string
}

export async function POST(request: Request) {
	// get all headers
	const requestHeaders = new Headers(request.headers)
	// get header name "Authorization"
	const auth = requestHeaders.get('Authorization')

	// get body out of body
	const { email, password, repeat_password, name } =
		(await request.json()) as RegisterProps

	// register
	const registerRes = await register({
		email,
		password,
		name,
		repeat_password,
	})

	// check if registerRes is type Error
	if (registerRes instanceof Error) {
		return NextResponse.json(registerRes.message, {
			status: 400,
		})
	}

	// return registerRes
	return NextResponse.json({ data: registerRes })
}
