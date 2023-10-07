import { Menu } from '@prisma/client'
import prisma from '@/utils/prisma'

type GetMenus = () => Promise<Menu[]>
export const getMenus: GetMenus = async () => {
	return prisma.menu.findMany({})
}

