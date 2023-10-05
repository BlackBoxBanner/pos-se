import { prismaMock } from "@./singleton"
import { login, LoginType, register, RegisterProps } from "@/utils/auth/session"


test("login user", () => {
  const registerProps: RegisterProps = {
    email: "",
    name: "",
    password: "",
    repeat_password: ""
  }

  expect(2 + 2).toBe(4)
})
