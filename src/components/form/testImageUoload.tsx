'use client'

import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { FormEvent, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import axios from 'axios'
import { fileToBuffer } from '@/controller/fileToBuffer'

export default function TestImageUpload() {
	const [image, setImage] = useState<File | undefined>()
	const [search, setSearch] = useState<string>('')
	const [imageUrl, setImageUrl] = useState<string>('')

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!image) return

		try {
			const url = await axios.post('/api/image', {
				fileName: image?.name,
				buffer: await fileToBuffer(image),
			})

			console.log(url.data)
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				console.log(err)
			}
		}
	}

	async function onSearch(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!search) return

		try {
			const res = await axios.get(`/api/image?name=${search}`)
			setImageUrl(res.data)
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				console.log(err)
			}
		}
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<Input
					type='file'
					label={'file'}
					id={'file'}
					name={'file'}
					onChange={(event) => setImage(event.target.files?.[0])}
					accept='image/*'
				/>
				<Button type={'submit'}>change image</Button>
			</form>
			{image && (
				<div>
					<img
						src={URL.createObjectURL(image)}
						alt=''
						className={twMerge(`aspect-auto h-60`)}
					/>
				</div>
			)}
			<div>
				<form onSubmit={onSearch}>
					<Input
						label={'image name'}
						id={'name'}
						onChange={(event) => setSearch(event.target.value)}
					/>
					<Button type={'submit'}>search</Button>
				</form>
			</div>
			{imageUrl && (
				<img src={imageUrl} alt='' className={twMerge(`aspect-auto h-60`)} />
			)}
		</div>
	)
}
