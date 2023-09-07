import {cookies} from "next/headers";
import {decryptData, encryptData} from '@/utils/encrypt'
import {Session} from "inspector";

interface CookieCreate<T = string | Record<string, any>> {
  name: string;
  value: T;
}

export async function cCreate<T>({name, value}: CookieCreate<T>) {
  const storeCookies = cookies()

  const AUTH_SECRET = process.env.AUTH_SECRET

  if (!AUTH_SECRET) throw new Error("AUTH_SECRET must be set")

  storeCookies.set({
    name,
    value: encryptData(JSON.stringify(value), AUTH_SECRET)
  })
}

export async function cRead<T>(name: string) {
  const storeCookies = cookies()

  const AUTH_SECRET = process.env.AUTH_SECRET
  const cookie = storeCookies.get(name)

  if (!AUTH_SECRET) throw new Error("AUTH_SECRET must be set")
  if (!cookie) return null

  return decryptData<T>(cookie.value, AUTH_SECRET)
}

export async function cDelete(name: string) {
  const storeCookies = cookies()
  try {
    storeCookies.delete(name)
  } catch (error) {
    throw new Error("Could not delete cookie")
  }
}