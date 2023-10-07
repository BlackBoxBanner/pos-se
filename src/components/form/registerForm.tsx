'use client'
import axios, { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RegisterProps } from '@/utils/auth/session'
import { Input } from '../input'
import { BodyProps } from '@/app/api/auth/register/route'

interface RegisterFormProps {
	list: string[]
	route: string
}

export default function RegisterForm({ list, route }: RegisterFormProps) {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterProps>()

	const [error, setError] = useState('')
	const [status, setStatus] = useState('')

	function onSubmit(data: RegisterProps) {
		setStatus('loading')
		axios
			.post<any, any, BodyProps>('/api/auth/register', {
				data: {
					name: data.name,
					email: data.email,
					password: data.password,
					repeat_password: data.repeat_password,
				},
				role: 'OWNER',
			})
			.catch((err: Error | AxiosError) => {
				if (axios.isAxiosError(err)) {
					setError(err.response?.data)
				}
				setStatus('')
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
					label='Name'
					id='name'
					error={errors.name?.message}
					{...register('name', {
						required: 'Name require',
					})}
				/>
				<Input
					label='Email'
					id='email'
					error={errors.email?.message}
					{...register('email', {
						required: 'Email require',
						validate: (value) => {
							const result = list.reduce((previousValue, currentValue) => {
								if (currentValue == value) return 'Email already in used'
								return previousValue
							}, '')
							return result ? result : true
						},
						pattern: {
							value: /^\S+@\S+\.\S+$/,
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
						required: 'Password require',
					})}
				/>
				<Input
					label='Password confirmation'
					type='password'
					id='repeat_password'
					error={errors.repeat_password?.message}
					{...register('repeat_password', {
						required: 'Password confirmation require',
						validate: (value, formValues) => {
							if (value !== formValues.password) return 'Password not match'
							return true
						},
					})}
				/>
				<button type='submit'>{`Register ${status}`}</button>
				{error}
			</form>
		</>
	)
}
