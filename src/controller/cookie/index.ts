import { cookies } from 'next/headers'
import { create, verify } from '@/controller/encrypt/jwt'

interface CookieCreate<T = string | Record<string, any>> {
	name: string
	value: T
}

export async function cDelete(name: string) {
	const storeCookies = cookies()
	try {
		storeCookies.delete(name)
	} catch (error) {
		throw new Error('Could not delete cookie')
	}
}

export async function cCreate<T>({ name, value }: CookieCreate<T>) {
	const storeCookies = cookies()

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

	const cookie = storeCookies.get(name)

	if (!cookie) return null

	return verify<T>(cookie.value)
}
