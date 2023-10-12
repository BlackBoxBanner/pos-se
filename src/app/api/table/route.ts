import { CreateTableProps, createTable } from "@/controller/table"
import { NextResponse, NextRequest } from "next/server"


export async function POST(request: NextRequest, respond: NextResponse) {

	const { tableNumber, seat } =(await request.json()) as CreateTableProps
    
	try {
		return NextResponse.json(
			await createTable({ tableNumber, seat }),
		)
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}