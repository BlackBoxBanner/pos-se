'use client'

import { ComponentProps } from 'react'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '.'

interface LogoutProps extends ComponentProps<'button'> {}

export default function Logout(props: LogoutProps) {
	const router = useRouter()

	function clickHandler() {
		axios
			.post('/api/auth/logout')
			.catch((err: Error | AxiosError) => {
				if (axios.isAxiosError(err)) {
					console.log(err)
				} else {
					throw new Error('Unknown error')
				}
			})
			.finally(() => {
				router.refresh()
				router.push('/')
			})
	}

	return <Button onClick={clickHandler}>{props.children}</Button>
}
