import { NextResponse } from 'next/server'
import {
	createAddress,
	CreateAddressProps,
	deleteAddress,
	DeleteAddressProps,
} from '@/utils/address'

export async function POST(request: Request) {
	// get body out of request data
	const { data, userId } = (await request.json()) as CreateAddressProps

	try {
		return NextResponse.json(await createAddress({ userId, data }))
	} catch (error) {
		if (error instanceof Error)
			NextResponse.json(error.message, {
				status: 400,
			})
	}

	return NextResponse.json('')
}

export async function DELETE(request: Request) {
	// get body out of request data
	const { id } = (await request.json()) as DeleteAddressProps

	try {
		return NextResponse.json(await deleteAddress({ id }))
	} catch (error) {
		if (error instanceof Error)
			NextResponse.json(error.message, {
				status: 400,
			})
	}

	return NextResponse.json('')
}
