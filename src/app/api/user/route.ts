import { deleteUser, getUsers } from '@/utils/auth/session'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
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
	try {
		return NextResponse.json(await getUsers())
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 400 })
		}
	}
}
