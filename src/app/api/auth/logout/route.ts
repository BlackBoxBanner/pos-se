import { NextRequest, NextResponse } from 'next/server'
import { logout } from '@/controller/auth/session'

export async function POST(request: NextRequest) {
	await logout().catch((reason) => {
		console.log(reason)
	})
	return NextResponse.json({ success: true })
}
