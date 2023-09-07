import {NextResponse} from 'next/server';
import {logout} from "@/utils/auth/session";

export async function GET(request: Request) {
  return NextResponse.json("auth")
}