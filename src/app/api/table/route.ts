import { CreateTableProps, createTable } from '@/controller/table'
import { NextResponse, NextRequest } from 'next/server'
import { apiAuth } from '@/utils/auth'

export async function POST(request: NextRequest, respond: NextResponse) {
	const auth = apiAuth(request)
	if (auth) return auth

	const { tableNumber, seat } = (await request.json()) as CreateTableProps

	try {
		return NextResponse.json(await createTable({ tableNumber, seat }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}
