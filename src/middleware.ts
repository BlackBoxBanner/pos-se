import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { useServerSession } from './utils/auth/session';

export function middleware(request: NextRequest) {
	const cookie = request.cookies.get('SimpleAuth')
	if (request.nextUrl.pathname.startsWith('/store')) {
		if (!cookie) return NextResponse.redirect(new URL('/signin', request.url))
	}

}
// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)', '/store/:path*'],
}
