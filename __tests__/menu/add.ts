import { createMenu } from '@/utils/menu/index'
import { prismaMock } from '../../singleton'
import { Menu } from '@prisma/client'

describe('Add Menu', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	const menu: Menu = {
        id: '',
        name: 'Izakaya',
        image: 'https://dish.co.nz/assets/Uploads/summer-v2__FillWzg1MCwxMTc0XQ.jpg',
        type: 'Dish',
        status: true || false,
        price: 100,
        createAt: new Date(), 
        updatedAt: new Date(),
    }

	it('should return an error when no name provided', async () => {
		await expect(
			createMenu(
				{
                    name: '',
		            image: menu.image,
		            type: menu.type,
		            status: menu.status,
		            price: menu.price,
				},
			),
		).rejects.toThrow('No name provided.')
	})

    it('should return an error when no image provided.', async () => {
		await expect(
			createMenu(
				{
                    name: menu.name,
		            image: '',
		            type: menu.type,
		            status: menu.status,
		            price: menu.price,
				},
			),
		).rejects.toThrow('No image provided.')
	})

    it('should return an error when no type provided.', async () => {
		await expect(
			createMenu(
				{
                    name: menu.name,
		            image: menu.image,
		            type: '',
		            status: menu.status,
		            price: menu.price,
				},
			),
		).rejects.toThrow('No type provided.')
	})

    it('should return an success', async () => {
        prismaMock.menu.findMany.mockResolvedValue([])
        prismaMock.menu.create.mockResolvedValue(menu)
		await expect(
			createMenu(
				{
                    name: menu.name,
		            image: menu.image,
		            type: menu.type,
		            status: menu.status,
		            price: menu.price,
				},
			),
		).resolves.toBe(menu)
	}, 2000)
})
