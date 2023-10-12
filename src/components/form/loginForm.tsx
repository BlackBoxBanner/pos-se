'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { Input } from '../input'
import { Button } from '../button'
import { LoginType } from '@/controller/auth/session'

interface LoginFormProps {
	route: string
}

export default function LoginForm({ route }: LoginFormProps) {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginType>()

	const [resError, setResError] = useState('')
	const [status, setStatus] = useState('')

	function onSubmit(data: LoginType) {
		setStatus('loading')
		axios
			.post('/api/auth/signin', {
				email: data.email,
				password: data.password,
			})
			.catch((err: Error | AxiosError) => {
				if (axios.isAxiosError(err)) {
					setStatus('')
					setResError(err.response?.data)
				} else {
					setStatus('')
				}
			})
			.then((value) => {
				if (value) goRoute()
			})
	}

	function goRoute() {
		router.refresh()
		router.push(route)
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label='Email'
					id='email'
					error={errors.email?.message}
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
							message: 'Input must be an email',
						},
					})}
				/>
				<Input
					label='Password'
					type='password'
					id='password'
					error={errors.password?.message}
					{...register('password', {
						required: 'Password required',
					})}
				/>
				<Button type={'submit'}>{`Login ${status}`}</Button>
				{resError}
			</form>
		</>
	)
}
