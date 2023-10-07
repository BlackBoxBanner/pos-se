import { NextRequest, NextResponse } from "next/server";
import { logout } from '@/utils/auth/session'

export async function GET(request: NextRequest) {
	return NextResponse.json('base')
}
