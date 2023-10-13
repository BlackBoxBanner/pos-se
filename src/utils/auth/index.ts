import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

type ApiAuthProps = NextRequest

export function apiAuth(request: ApiAuthProps) {
	const headerList = new Headers(request.headers)
	const apiKey = headerList.get('Authorization')
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY

	if (!API_KEY) {
		return NextResponse.json('API_KEY not found in environment variables', {
			status: 400,
		})
	}

	if (apiKey !== `Bearer ${API_KEY}`) {
		return NextResponse.json(
			'Authorization not match with API_KEY in environment variables',
			{
				status: 400,
			},
		)
	}
}

export const axiosInstance = axios.create({
	baseURL: '/api',
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
	},
})
