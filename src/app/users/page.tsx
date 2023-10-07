import prisma from '@/utils/prisma'
import Logout from '@/components/button/logout'
import { twMerge } from 'tailwind-merge'

export default async function UsersList() {
	const users = await prisma.user.findMany()
	return (
		<>
			<Logout>logout</Logout>
			{users.map((user, index) => {
				return (
					<div
						className={twMerge(
							'grid grid-cols-4 grid-flow-row-dense',
							'border border-black',
							'rounded-sm',
							'w-fit',
							'my-1',
						)}
						key={index}
					>
						<div>User ID</div>
						<p className={twMerge('col-span-3')}>{user.id}</p>
						<div>Name</div>
						<p className={twMerge('col-span-3')}>{user.name}</p>
						<div>Email</div>
						<p className={twMerge('col-span-3')}>{user.email}</p>
						<div>Role</div>
						<p className={twMerge('col-span-3')}>{user.role}</p>
						<div>Password hashed</div>
						<p className={twMerge('col-span-3')}>{user.password}</p>
						<div>createAt</div>
						<p className={twMerge('col-span-3')}>
							{user.createAt.toLocaleString()}
						</p>
						<div>updatedAt</div>
						<p className={twMerge('col-span-3')}>
							{user.updatedAt.toLocaleString()}
						</p>
					</div>
				)
			})}
		</>
	)
}
