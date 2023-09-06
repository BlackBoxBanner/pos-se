import {NextResponse} from 'next/server';
import {login} from "@/utils/auth/session";

interface PostBody {
  email: string
  password: string
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

  const {email, password} = await request.json() as PostBody

  const loginRes = await login({email, password})
  if (loginRes instanceof Error) {
    return NextResponse.json(loginRes, {
      status: 400
    })
  }

  return NextResponse.json({data: loginRes})
}