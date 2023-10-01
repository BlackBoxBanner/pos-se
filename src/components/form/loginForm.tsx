'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { wait } from 'next/dist/build/output/log'

interface LoginFormProps {
	route: string
}

export default function LoginForm({ route }: LoginFormProps) {
	interface LoginFormType {
		email: string
		password: string
	}

	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormType>()

	const [resError, setResError] = useState('')
	const [status, setStatus] = useState('')

	function onSubmit(data: LoginFormType) {
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
				<div>
					<label htmlFor={'email'}>Email</label>
					<input
						type='email'
						id={'email'}
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
								message: 'Input must be an email',
							},
						})}
					/>
					{errors.email?.message && errors.email?.message}
				</div>
				<div>
					<label htmlFor={'password'}>Password</label>
					<input
						type='password'
						id={'password'}
						{...register('password', {
							required: 'Password required',
						})}
					/>
					{errors.password?.message && errors.password?.message}
				</div>
				<button type={'submit'}>{`Login ${status}`}</button>
				{resError}
			</form>
		</>
	)
}
