'use client'
import axios, { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface RegisterFormProps {
	list: string[]
	route: string
}

export default function RegisterForm({ list, route }: RegisterFormProps) {
	interface RegisterForm {
		name: string
		email: string
		password: string
		passwordConfirm: string
	}

	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterForm>()

	const [error, setError] = useState('')
	const [status, setStatus] = useState('')

	function onSubmit(data: RegisterForm) {
		setStatus('loading')
		axios
			.post('/api/auth/register', {
				name: data.name,
				email: data.email,
				password: data.password,
				passwordConfirm: data.passwordConfirm,
			})
			.catch((err: Error | AxiosError) => {
				if (axios.isAxiosError(err)) {
					setStatus('')
					setError(err.response?.data)
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
				<div className={``}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						{...register('name', {
							required: 'Name require',
						})}
					/>
					{errors.name?.message}
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						{...register('email', {
							required: 'Email require',
							validate: (value) => {
								const result = list.reduce((previousValue, currentValue) => {
									if (currentValue == value) return 'Email already in used'
									return previousValue
								}, '')
								return result ? result : true
							},
						})}
					/>
					{errors.email?.message}
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						{...register('password', {
							required: 'Password require',
						})}
					/>
					{errors.password?.message}
				</div>
				<div>
					<label htmlFor='passwordConfirm'>Password confirmation</label>
					<input
						type='password'
						id='passwordConfirm'
						{...register('passwordConfirm', {
							required: 'Password confirmation require',
							validate: (value, formValues) => {
								if (value !== formValues.password) return 'Password not match'
								return true
							},
						})}
					/>
					{errors.passwordConfirm?.message}
				</div>
				<button type='submit'>{`Register ${status}`}</button>
				{error}
			</form>
		</>
	)
}
