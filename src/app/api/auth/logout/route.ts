import { NextResponse } from 'next/server'
import { logout } from '@/utils/auth/session'

interface PostBody {}

export async function POST(request: Request) {
	await logout().catch((reason) => {
		console.log(reason)
	})
	return NextResponse.json({ success: true })
}
