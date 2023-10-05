import RegisterForm from '@/components/form/registerForm'
import prisma from '@/utils/prisma'

export default async function Register() {
	const user = await prisma.user.findMany()
	const email = user.reduce((result, next) => {
		return [...result, next.email]
	}, [] as string[])
	return (
		<>
			<RegisterForm list={email} route={'/signin'} />
		</>
	)
}
