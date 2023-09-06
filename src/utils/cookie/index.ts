import {cookies} from "next/headers";
import {decryptData, encryptData} from '@/utils/encrypt'

interface CookieCreate {
  name: string;
  value: string;
}

export async function create({name, value}: CookieCreate) {
  const storeCookies = cookies()

  const AUTH_SECRET = process.env.AUTH_SECRET

  if (!AUTH_SECRET) throw new Error("AUTH_SECRET must be set")

  storeCookies.set({
    name,
    value: encryptData(value, AUTH_SECRET)
  })
}

export async function read<T>(name: string) {
  const storeCookies = cookies()

  const AUTH_SECRET = process.env.AUTH_SECRET
  const cookie = storeCookies.get(name)

  if (!AUTH_SECRET) throw new Error("AUTH_SECRET must be set")
  if (!cookie) return null

  return decryptData<T>(cookie.value, AUTH_SECRET)
}