import { NextRequest, NextResponse } from 'next/server'
import { LoginType, login } from '@/utils/auth/session'

export async function POST(request: NextRequest) {
	// // get all headers
	// const requestHeaders = new Headers(request.headers)
	// // get header name "Authorization"
	// const auth = requestHeaders.get('Authorization')

	// get body out of request data
	const { email, password } = (await request.json()) as LoginType

	try {
		return await login({ email, password })
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, {
				status: 400,
			})
		}
	}
}
