import { deleteMenu } from '@/controller/menu/index'
import { prismaMock } from '../../singleton'
import { Menu } from '@prisma/client'

describe('Delete Menu', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	const menu: Menu = {
		id: '65219688ee78e0061f679e7f',
		name: 'Izakaya',
		image:
			'https://dish.co.nz/assets/Uploads/summer-v2__FillWzg1MCwxMTc0XQ.jpg',
		type: 'Dish',
		status: false,
		price: 100,
		createAt: new Date(),
		updatedAt: new Date(),
	}

	it('should return an error when no id provided', async () => {
		await expect(
			deleteMenu({
				id: '',
			}),
		).rejects.toThrow('No id provided')
	})

	it('should return an success', async () => {
		prismaMock.menu.findMany.mockResolvedValue([])
		prismaMock.menu.delete.mockResolvedValue(menu)

		await expect(
			deleteMenu({
				id: '65219688ee78e0061f679e7f',
			}),
		).resolves.toBe(menu)
	}, 2000)
})
