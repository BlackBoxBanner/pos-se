import { Table } from "prisma/prisma-client"
import prisma from '@/utils/prisma'

export type CreateTableProps = Omit<Table, 'id' | 'createAt' | 'updatedAt'>
type CreateTable = (props: CreateTableProps) => Promise<Table>

export const createTable: CreateTable = async ({ tableNumber, seat }) => {
    if (!tableNumber) throw new Error('No tableNumber provided.')
    if (!seat) throw new Error('No seat provided.')

    // check a table to prevent duplicate table
    const existingTable = await prisma.table.findUnique({
        where: { tableNumber }
    })

    if (!!existingTable) throw new Error('Already have this tableNumber.')

    return prisma.table.create({
		data: {
			tableNumber,
            seat
		},
	})
}
