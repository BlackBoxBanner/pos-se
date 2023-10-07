import { Menu } from '@prisma/client'
import prisma from '@/utils/prisma'
import { type } from 'os'

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
	
	return prisma.menu.delete({
		where: {
			id
		}
	})
}

