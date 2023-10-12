import { useServerSession } from '@/controller/auth/session'

export default async function Store() {
	const session = await useServerSession()

	return (
		<>
			<title>store</title>
			{JSON.stringify(session)}
		</>
	)
}
