import { Menu } from '@prisma/client'
import prisma from '@/utils/prisma'

type GetMenus = () => Promise<Menu[]>
export const getMenus: GetMenus = async () => {
	return prisma.menu.findMany({})
}

export type GetFilterNameMenuProps = {
	name: string
}

type GetFilterNameMenu = (
	props: GetFilterNameMenuProps,
) => Promise<Menu[]>
export const getFilterNameMenu: GetFilterNameMenu = async ({ name }) => {
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
