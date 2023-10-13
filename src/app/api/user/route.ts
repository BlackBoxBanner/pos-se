import { deleteUser, getUsers } from '@/controller/auth/session'
import { NextRequest, NextResponse } from 'next/server'
import { apiAuth } from '@/utils/auth'

export async function DELETE(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	try {
		await deleteUser()
		return NextResponse.json('All user is deleted.')
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 400 })
		}
	}
}

export async function GET(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	try {
		return NextResponse.json(await getUsers())
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 400 })
		}
	}
}
