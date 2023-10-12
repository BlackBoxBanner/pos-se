import { editMenu } from '@/controller/menu'
import { prismaMock } from '../../singleton'
import { Menu } from '@prisma/client'

describe('Delete Menu', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	const menu: Menu = {
        id: '65219688ee78e0061f679e7f',
        name: 'Izakaya',
        image: 'https://dish.co.nz/assets/Uploads/summer-v2__FillWzg1MCwxMTc0XQ.jpg',
        type: 'Dish',
        status: false,
        price: 100,
        createAt: new Date(), 
        updatedAt: new Date(),
    }

	it('should return an error when no id provided', async () => {
		await expect(
			editMenu(
				{   
                    id: '',
                    name: menu.name,
                    type: menu.type,
                    image: menu.image,
                    price: menu.price,
                    status: menu.status,
                },
			),
		).rejects.toThrow('No id provided.')
	})

    it('should return an error when no name provided', async () => {
		await expect(
			editMenu(
				{   
                    id: menu.id,
                    name: '',
                    type: menu.type,
                    image: menu.image,
                    price: menu.price,
                    status: menu.status,
                },
			),
		).rejects.toThrow('No name provided.')
	})

    it('should return an error when no type provided', async () => {
		await expect(
			editMenu(
				{   
                    id: menu.id,
                    name: menu.name,
                    type: '',
                    image: menu.image,
                    price: menu.price,
                    status: menu.status,
                },
			),
		).rejects.toThrow('No type provided.')
	})


    it('should return an success', async () => {
        prismaMock.menu.findMany.mockResolvedValue([])
        prismaMock.menu.update.mockResolvedValue(menu)
        prismaMock.menu.findUnique.mockResolvedValue(menu)
    
		await expect(
			editMenu(
				{
                    id: menu.id,
                    name: menu.name,
                    type: menu.type,
                    image: menu.image,
                    price: menu.price,
                    status: false,
				},
			),
		).resolves.toBe(menu)
	}, 2000)
})
