import prisma from "@/utils/prisma"
import {compare, hash} from "bcrypt"
import {create, read} from '../cookie'

export async function useServerSession() {
  const AUTH_SECRET = process.env.AUTH_SECRET
  if (!AUTH_SECRET) throw new Error("AUTH_SECRET missing in config file")

  return read<string>("SimpleAuthent")
}

interface RegisterType {
  email: string;
  password: string;
  repeat_password: string;
  name: string;
}

export async function register(data: RegisterType) {
  if (!data.email) throw new Error("No email provided")
  if (!data.password) throw new Error("No password provided")
  if (!data.repeat_password) throw new Error("No repeat password provided")
  if (!data.name) throw new Error("No name provided")
  if (data.password != data.repeat_password) throw new Error("Password mismatch")
  const {email, password, name} = data


  try {
    return await prisma.user.create({
      data: {
        email,
        name,
        password: await hash(password, email.length),
      }
    })
  } catch (error) {
    throw new Error("Could not register")
  }
}

interface LoginType {
  email: string
  password: string
}

export async function login(data: LoginType) {
  if (!data.email) throw new Error("No email provided")
  if (!data.password) throw new Error("No password provided")

  const {email, password} = data

  const AUTH_SECRET = process.env.AUTH_SECRET

  if (!AUTH_SECRET) throw new Error("AUTH_SECRET must be set")

  const user = await prisma.user.findUnique({
    where: {
      email
    },
  })

  if (!user) return new Error("Invalid user")
  if (!(await compare(password, user.password))) return new Error("Invalid password")

  await create({
    name: "SimpleAuthent",
    value: JSON.stringify(user)
  })

  return user
}