import { Address } from '@prisma/client'
import prisma from '../prisma'

export type GetAddressProps = { userId?: string }
type GetAddress = (props: GetAddressProps) => Promise<Address[]>

export const getAddress: GetAddress = async (props) => {
	const { userId } = props

	if (!userId) return prisma.address.findMany({})

	return prisma.address.findMany({
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

	const users = await prisma.user.findMany({})

	const matchedUsers = users.reduce((previousValue, currentValue) => {
		currentValue.id == userId && previousValue.push(currentValue.id)
		return previousValue
	}, [] as string[])

	if (matchedUsers.length == 0) throw new Error('User not found.')

	const addresses = await prisma.address.findMany({})

	const matchedAddresses = addresses.reduce((previousValue, currentValue) => {
		currentValue.name == name && previousValue.push(currentValue.name)
		return previousValue
	}, [] as string[])

	if (matchedAddresses.length > 0) throw new Error('Address already exists.')

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
