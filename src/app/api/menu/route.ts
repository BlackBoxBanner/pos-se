import { NextResponse, NextRequest } from 'next/server'
import {
	createMenu,
	CreateMenuProps,
	GetFilterNameMenuProps,
	getMenu,
	editMenu,
	EditMenuProps,
	DeleteMenuProps,
	deleteMenu,
} from '@/controller/menu'
import { apiAuth } from '@/utils/auth'

export async function GET(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

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
	const auth = apiAuth(request)
	if (auth) return auth

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

export async function DELETE(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	// get body out of request data
	const { id } = (await request.json()) as DeleteMenuProps

	try {
		return NextResponse.json(await deleteMenu({ id }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}

//EditMenuAPI
export async function PATCH(request: NextRequest) {
	const auth = apiAuth(request)
	if (auth) return auth

	// get body out of request data
	const { id, name, image, type, status, price } =
		(await request.json()) as EditMenuProps
	try {
		return NextResponse.json(
			await editMenu({ id, name, image, type, status, price }),
		)
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}
