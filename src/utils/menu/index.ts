import { Menu } from '@prisma/client'
import prisma from '@/utils/prisma'

export type GetFilterNameMenuProps = {
	name?: string
}

type GetMenu = (props: GetFilterNameMenuProps) => Promise<Menu[]>
export const getMenu: GetMenu = async ({ name }) => {
	if (!name) return prisma.menu.findMany({})

	return prisma.menu.findMany({
		where: {
			name: {
				contains: name,
			},
		},
	})
}

export type SearchMenuProps = {
	menu: Menu[]
	name: string
}

type SearchMenus = (props: SearchMenuProps) => Menu[]
export const searchMenus: SearchMenus = ({ menu, name }) => {
	return menu.filter((item) => item.name.includes(name))
}


export type DeleteMenuProps = {
	id: string
}

type DeleteMenu = (props: DeleteMenuProps) => Promise<Menu>
export const deleteMenu: DeleteMenu = async ({ id }) => {

	if (!id) throw new Error('No id provided')

	return prisma.menu.delete({
		where: {
			id,
		},
	})
}


export type CreateMenuProps = Pick<
	Menu,
	'name' | 'image' | 'price' | 'status' | 'type'
>
type CreateMenu = (props: CreateMenuProps) => Promise<Menu>
export const createMenu: CreateMenu = async ({
	name,
	type,
	image,
	price,
	status,
}) => {
	if (!name) throw new Error('No name provided.')
	if (!type) throw new Error('No type provided.')
	if (!image) throw new Error('No image provided.')
	if (!price) throw new Error('No price provided.')
	if (!status) throw new Error('No status provided.')

	return prisma.menu.create({
		data: {
			name,
			type,
			image,
			price,
			status,
		},
	})
}
