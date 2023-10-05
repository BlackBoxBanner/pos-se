import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	// console.log("test");
}
// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
