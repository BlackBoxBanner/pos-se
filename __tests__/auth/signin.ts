import { login } from '@/utils/auth/session'
import { prismaMock } from '@/../singleton'

describe('login', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should return an error when no email is provided', async () => {
		await expect(login({ password: 'password', email: '' })).rejects.toThrow(
			'No email provided',
		)
	})

	it('should return an error when no password is provided', async () => {
		await expect(
			login({ password: '', email: 'test@example.com' }),
		).rejects.toThrow('No password provided')
	})

	it('should return an error when the user is not found', async () => {
		prismaMock.user.findUnique.mockResolvedValue(null)

		await expect(
			login({ password: 'password', email: 'test@example.com' }),
		).rejects.toThrow('Invalid user')
	})

	it('should return an error when the password is invalid', async () => {
		prismaMock.user.findUnique.mockResolvedValue({
			id: '1',
			email: 'test@example.com',
			password: 'hashedpassword',
			name: 'John',
			role: 'OWNER',
			createAt: new Date(),
			updatedAt: new Date(),
		})
		await expect(
			login({ password: 'wrongpassword', email: 'test@example.com' }),
		).rejects.toThrow('Invalid password')
	})
})
