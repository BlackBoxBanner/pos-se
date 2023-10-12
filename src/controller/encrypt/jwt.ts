import * as jose from 'jose'

export const GetAuthJWT = {
	secret: () => {
		const secretEnv = process.env.AUTH_SECRET
		if (!secretEnv) throw new Error('AUTH_SECRET missing in .env file.')
		return new TextEncoder().encode(secretEnv)
	},
	setProtectedHeader: {
		alg: 'HS256',
		typ: 'JWT',
	},
}

export async function create<T = string | Record<string, string>>(props: {
	id: string
	subject: string
	payload?: T
}) {
	if (typeof props != 'object')
		throw new Error(
			"props in createJWT function must be 'props : Record<string, string>' ",
		)

	const now = Math.floor(new Date().getTime() / 1000)
	const expiration = now + 30 * 24 * 60 * 60 // 30 days in seconds

	return new jose.SignJWT({ data: props.payload })
		.setProtectedHeader(GetAuthJWT.setProtectedHeader)
		.setIssuedAt(now)
		.setIssuer('http://localhost:3000')
		.setAudience(props.id)
		.setExpirationTime(expiration)
		.setSubject(props.subject)
		.sign(GetAuthJWT.secret())
}

export async function verify<T = string | Record<string, string>>(
	jwtData: string,
) {
	const session = await jose.jwtVerify(jwtData, GetAuthJWT.secret())
	return session.payload.data as T
}
