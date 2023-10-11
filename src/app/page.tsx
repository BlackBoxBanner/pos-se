import { Link } from '@/components/button/Link'
import Logout from '@/components/button/logout'
import { useServerSession } from '@/utils/auth/session'
import { Kanit } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { useMinio } from '@/utils/minio'

const font = Kanit({ weight: '300', style: 'normal', subsets: ['thai'] })

export default async function Home() {
	const session = await useServerSession()

	const minioClient = useMinio()

	const test = await minioClient.listBuckets()

	console.log(test)

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 gap-4'>
			{session ? JSON.stringify(session) : 'no session'}
			<Link href={'/signin'}>signin</Link>
			<Link href={'/register'}>register</Link>
			<Link href={'/users'}>users</Link>
			<Logout>logout</Logout>
			<div className={twMerge(font.className, 'text-[1rem]')}>
				ข้อมูลส่วนบุคคล
				หรือข้อความส่วนบุคคลที่ทางโครงการเก็บรวบรวมเกี่ยวกับผู้ใช้
				จะเป็นข้อมูลที่สามารถระบุตัวตนของท่านได้ ทางโครงการจะทําการเก็บรวบรวม
				ถ่ายโอน และใช้ข้อมูลส่วนบุคคลประเภทต่าง ๆ
				ที่เกี่ยวกับผู้ใช้ตามที่โครงการได้จัดกลุ่มไว้ด้วยกัน ดังต่อไปนี้
			</div>
		</main>
	)
}
