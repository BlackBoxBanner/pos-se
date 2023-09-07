import {NextResponse} from 'next/server';
import {register} from "@/utils/auth/session";

interface PostBody {
  name: string,
  email: string,
  password: string
  passwordConfirm: string
}

export async function POST(request: Request) {
  const requestHeaders = new Headers(request.headers)
  const auth = requestHeaders.get("Authorization")
  // if (!checkAuth(auth!)) {
  //   return new NextResponse(JSON.stringify("No API_KEY or Unauthorized."), {
  //     status: 401,
  //     headers: {"Content-Type": "application/json"},
  //   });
  // }

  const {email, password, passwordConfirm, name} = await request.json() as PostBody

  const registerRes = await register({email, password, name, repeat_password: passwordConfirm})

  if (registerRes instanceof Error) {
    return NextResponse.json(registerRes.message, {
      status: 400,
    })
  }

  return NextResponse.json({data: registerRes})
}