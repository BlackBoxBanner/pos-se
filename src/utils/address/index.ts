import { Address } from '@prisma/client'
import prisma from '../prisma'

export type GetAddressProps = { userId?: string }
type GetAddress = (props: GetAddressProps) => Promise<Address[]>

export const getAddress: GetAddress = async (props) => {
	const { userId } = props
	if (!userId) throw new Error('No ID provided.')

	return await prisma.address.findMany({
		where: {
			User: {
				id: userId,
			},
		},
	})
}

type CreateAddressData = Pick<Address, 'name' | 'phoneNumber'>

export type CreateAddressProps = { userId: string; data: CreateAddressData }
type CreateAddress = (props: CreateAddressProps) => Promise<Address>

export const createAddress: CreateAddress = async (props) => {
	const {
		userId,
		data: { name, phoneNumber },
	} = props
	if (!userId) throw new Error('No ID provided.')
	if (!name) throw new Error('No name provided.')
	if (!phoneNumber) throw new Error('No phone number provided.')

	const matchedUsers = await prisma.user.findUnique({
		where: {
			id: userId,
		},
	})

	if (!matchedUsers) throw new Error('User not found.')

	const matchedAddresses = await prisma.address.findUnique({
		where: {
			name,
		},
	})

	if (matchedAddresses) throw new Error('Address already exists.')

	return prisma.address.create({
		data: {
			name,
			phoneNumber,
			User: {
				connect: {
					id: userId,
				},
			},
		},
	})
}

export type DeleteAddressProps = { id: string }
type DeleteAddress = (props: DeleteAddressProps) => Promise<Address>

export const deleteAddress: DeleteAddress = async (props) => {
	const { id } = props
	if (!id) throw new Error('No ID provided.')

	const matchedAddresses = await prisma.address.findUnique({
		where: {
			id,
		},
	})

	if (!matchedAddresses) throw new Error('Address not found.')

	return prisma.address.delete({
		where: {
			id,
		},
	})
}

export type UpdateAddressProps = Pick<Address, 'id' | 'name' | 'phoneNumber'>
type UpdateAddress = (props: UpdateAddressProps) => Promise<Address>

export const updateAddress: UpdateAddress = async (props) => {
	const { id, name, phoneNumber } = props
	if (!id) throw new Error('No ID provided.')
	if (!name) throw new Error('No name provided.')
	if (!phoneNumber) throw new Error('No phone number provided.')

	const address = await prisma.address.findUnique({
		where: {
			id,
		},
	})

	if (!address) throw new Error('Address not found.')

	return prisma.address.update({
		where: {
			id,
		},
		data: {
			name,
			phoneNumber,
		},
	})
}
