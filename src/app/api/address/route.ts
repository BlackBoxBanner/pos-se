import { NextRequest, NextResponse } from 'next/server'
import {
	createAddress,
	CreateAddressProps,
	deleteAddress,
	DeleteAddressProps,
	getAddress,
	GetAddressProps,
	updateAddress,
	UpdateAddressProps,
} from '../../../controller/address'

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const userId = searchParams.get('userId') as GetAddressProps['userId']
	// const { userId } = (await request.json()) as GetAddressProps
	try {
		return NextResponse.json(await getAddress({ userId }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}

export async function POST(request: NextRequest) {
	// get body out of request data
	const { data, userId } = (await request.json()) as CreateAddressProps
	try {
		return NextResponse.json(await createAddress({ userId, data }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}

export async function DELETE(request: NextRequest) {
	// get body out of request data
	const { id } = (await request.json()) as DeleteAddressProps

	try {
		return NextResponse.json(await deleteAddress({ id }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}

export async function PATCH(request: NextRequest) {
	// get body out of request data
	const { id, name, phoneNumber } = (await request.json()) as UpdateAddressProps

	try {
		return NextResponse.json(await updateAddress({ id, name, phoneNumber }))
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json(error.message, {
				status: 400,
			})
	}
}
