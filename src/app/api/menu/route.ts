import { NextResponse, NextRequest } from 'next/server'
import {
	createMenu,
	CreateMenuProps,
	GetFilterNameMenuProps,
	getMenu,
} from '@/utils/menu'

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const name = searchParams.get('name') as GetFilterNameMenuProps['name']

	try {
		return NextResponse.json(await getMenu({ name }))
	} catch (error: unknown) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}

//createMenu
export async function POST(request: NextRequest) {
	// get body out of request data
	const { name, status, type, image, price } =
		(await request.json()) as CreateMenuProps
	try {
		return NextResponse.json(
			await createMenu({ name, status, type, image, price }),
		)
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}
