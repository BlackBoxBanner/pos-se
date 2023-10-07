import { NextResponse, NextRequest } from 'next/server'
import { GetFilterNameMenuProps, getMenu } from '@/utils/menu'

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
