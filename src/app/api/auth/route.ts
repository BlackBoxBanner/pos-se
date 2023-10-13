import { NextRequest, NextResponse } from 'next/server'
import { apiAuth } from '@/utils/auth'

export async function GET(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	return NextResponse.json('auth')
}
