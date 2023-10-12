import { NextResponse, NextRequest } from 'next/server'
import {
	getImage,
	uploadImage,
	UploadImageProps,
} from '@/controller/image/uploader'
import { GetFilterNameMenuProps } from '@/controller/menu'

export async function POST(request: NextRequest) {
	const { buffer, fileName } = (await request.json()) as UploadImageProps

	try {
		return NextResponse.json(await uploadImage({ buffer, fileName }))
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 400 })
		}
	}

	return NextResponse.json('Bad request', { status: 404 })
}

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const name = searchParams.get('name') as GetFilterNameMenuProps['name']

	if (!name) return NextResponse.json('No name provided', { status: 400 })
	try {
		return NextResponse.json(await getImage(name))
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json(error.message, { status: 400 })
		}
	}
}
