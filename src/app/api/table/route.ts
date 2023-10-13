import {
	CreateTableProps,
	createTable,
	deleteTable,
	DeleteTableProps,
} from '@/controller/table'
import { NextResponse, NextRequest } from 'next/server'
import { apiAuth } from '@/utils/auth'

export async function POST(request: NextRequest) {
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

export async function DELETE(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	const { id } = (await request.json()) as DeleteTableProps

	try {
		return NextResponse.json(await deleteTable({ id }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}
