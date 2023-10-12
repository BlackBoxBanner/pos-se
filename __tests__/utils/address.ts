import { prismaMock } from '@/../singleton'
import { createAddress, updateAddress, deleteAddress } from '../../src/controller/address'
import { Address } from '@prisma/client'

const address: Address = {
	id: '1',
	name: 'mock name',
	phoneNumber: 2423233232,
	userId: '4234',
	createAt: new Date(),
	updatedAt: new Date(),
}

describe('create address', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should throw an error if userId is not provided', async () => {
		prismaMock.address.create.mockResolvedValue(address)
		await expect(
			createAddress({
				data: {
					name: address.name,
					phoneNumber: address.phoneNumber,
				},
				userId: '',
			}),
		).rejects.toThrow('No ID provided.')
	})

	it('should throw an error if name is not provided', async () => {
		prismaMock.address.create.mockResolvedValue(address)
		await expect(
			createAddress({
				data: {
					name: '',
					phoneNumber: address.phoneNumber,
				},
				userId: address.userId!,
			}),
		).rejects.toThrow('No name provided.')
	})

	it('should throw an error if phone number is not provided', async () => {
		prismaMock.address.create.mockResolvedValue(address)
		await expect(
			createAddress({
				data: {
					name: address.name,
					phoneNumber: 0,
				},
				userId: address.userId!,
			}),
		).rejects.toThrow('No phone number provided.')
	})

	it("should return address if it's success", async () => {
		prismaMock.user.findUnique.mockResolvedValue({
			id: 'asdasdasdasdasd',
			name: 'mock name',
			email: 'mock@mail.com',
			role: 'OWNER',
			password: 'mock password',
			createAt: new Date(),
			updatedAt: new Date(),
		})
		prismaMock.address.create.mockResolvedValue(address)
		await expect(
			createAddress({
				data: {
					name: address.name,
					phoneNumber: address.phoneNumber,
				},
				userId: address.userId!,
			}),
		).resolves.toBe(address)
	})
})

describe('update address', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should throw an error if userId is not provided', async () => {
		prismaMock.address.update.mockResolvedValue(address)
		await expect(
			updateAddress({
				id: '',
				name: address.name,
				phoneNumber: address.phoneNumber,
			}),
		).rejects.toThrow('No ID provided.')
	})

	it('should throw an error if name is not provided', async () => {
		prismaMock.address.update.mockResolvedValue(address)
		await expect(
			updateAddress({
				id: address.id!,
				name: '',
				phoneNumber: address.phoneNumber,
			}),
		).rejects.toThrow('No name provided.')
	})

	it('should throw an error if phone number is not provided', async () => {
		prismaMock.address.update.mockResolvedValue(address)
		await expect(
			updateAddress({
				id: address.id,
				name: address.name,
				phoneNumber: 0,
			}),
		).rejects.toThrow('No phone number provided.')
	})

	it("should return address if it's success", async () => {
		prismaMock.address.findUnique.mockResolvedValue(address)
		prismaMock.address.update.mockResolvedValue(address)
		await expect(
			updateAddress({
				id: address.id,
				name: address.name,
				phoneNumber: address.phoneNumber,
			}),
		).resolves.toBe(address)
	})
})

describe('delete address', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should throw an error if userId is not provided', async () => {
		prismaMock.address.delete.mockResolvedValue(address)
		await expect(
			deleteAddress({
				id: '',
			}),
		).rejects.toThrow('No ID provided.')
	})

	it("should return address if it's success", async () => {
		prismaMock.address.findUnique.mockResolvedValue(address)
		prismaMock.address.delete.mockResolvedValue(address)
		await expect(
			deleteAddress({
				id: address.id,
			}),
		).resolves.toBe(address)
	})
})
