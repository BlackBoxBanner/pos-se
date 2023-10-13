import { NextRequest, NextResponse } from 'next/server'
import { LoginType, login } from '@/controller/auth/session'
import { apiAuth } from '@/utils/auth'

export async function POST(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

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
