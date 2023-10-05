import { Link } from '@/components/button/Link'
import Logout from '@/components/button/logout'
import { useServerSession } from '@/utils/auth/session'

export default async function Home() {
	const session = await useServerSession()

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 gap-4'>
			{session ? JSON.stringify(session) : 'no session'}
			<Link href={'/signin'}>signin</Link>
			<Link href={'/register'}>register</Link>
			<Link href={'/users'}>users</Link>
			<Logout>logout</Logout>
		</main>
	)
}
