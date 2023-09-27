import { cookies } from 'next/headers'
import { create, verify } from '@/utils/encrypt/jwt'

interface CookieCreate<T = string | Record<string, any>> {
	name: string
	value: T
}

export async function cDelete(name: string) {
	const storeCookies = cookies()
	try {
		storeCookies.delete(name)
		// const cok = storeCookies.getAll()
		// cok.map((c) => {
		//   storeCookies.delete(c.name)
		// })
	} catch (error) {
		throw new Error('Could not delete cookie')
	}
}

export async function cCreate<T>({ name, value }: CookieCreate<T>) {
	const storeCookies = cookies()

	const AUTH_SECRET = process.env.AUTH_SECRET

	if (!AUTH_SECRET) throw new Error('AUTH_SECRET must be set')

	storeCookies.set({
		name,
		value: await create({
			subject: name,
			id: name,
			payload: value,
		}),
	})
}

export async function cRead<T>(name: string) {
	const storeCookies = cookies()

	const AUTH_SECRET = process.env.AUTH_SECRET
	const cookie = storeCookies.get(name)

	if (!AUTH_SECRET) throw new Error('AUTH_SECRET must be set')
	if (!cookie) return null

	return verify<T>(cookie.value)
}
