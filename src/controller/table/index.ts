import { Table } from 'prisma/prisma-client'
import prisma from '@/utils/prisma'

export type CreateTableProps = Omit<Table, 'id' | 'createAt' | 'updatedAt'>
type CreateTable = (props: CreateTableProps) => Promise<Table>

export const createTable: CreateTable = async ({ tableNumber, seat }) => {
	if (!tableNumber) throw new Error('No tableNumber provided.')
	if (!seat) throw new Error('No seat provided.')

	// check a table to prevent duplicate table
	const existingTable = await getTable({ tableNumber })

	if (existingTable) throw new Error('Already have this tableNumber.')

	return prisma.table.create({
		data: {
			tableNumber,
			seat,
		},
	})
}

export type DeleteTableProps = {
	id: string
}

type DeleteTable = (props: DeleteTableProps) => Promise<Table>
export const deleteTable: DeleteTable = async ({ id }) => {
	if (!id && id !== undefined) throw new Error('No id provided.')

	const table = await getTable({ id })

	if (!table) throw new Error('No table found.')

	return prisma.table.delete({
		where: { id },
	})
}

export type GetTableProps = { id?: string; tableNumber?: number }
type GetTable = (props: GetTableProps) => Promise<Table | null>

export const getTable: GetTable = async ({ id, tableNumber }) => {
	if (!id && !tableNumber) throw new Error('No id or tableNumber provided.')
	if (id && tableNumber)
		throw new Error('You can only provide id or tableNumber.')

	if (tableNumber) {
		return prisma.table.findUnique({
			where: {
				tableNumber,
			},
		})
	}

	return prisma.table.findUnique({
		where: {
			id,
		},
	})
}

export type EditTableProps = Omit<Table, 'createAt | updateAt'>
type EditTable = (props: EditTableProps) => Promise<Table>

export const editTable: EditTable = async ({ id,tableNumber,seat }) => {

	if (!id) throw new Error('No ID provided')
	if (!tableNumber) throw new Error('No Table Number provided')
	if (!seat) throw new Error('No seat provided')


	const table = await prisma.menu.findUnique({
		where: { id },
	})

	if (!table) throw new Error('No matching table found')

	return prisma.table.update({
		where : { id },
		data : {tableNumber,seat},

	})
	
}