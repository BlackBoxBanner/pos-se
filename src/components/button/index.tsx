'use client'

import { clsx } from 'clsx'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonComponent = ComponentProps<'button'>

export function Button(props: ButtonComponent) {
	const { className, ...rest } = props
	return (
		<button
			className={twMerge(
				'border border-black px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all ease-in-out duration-300',
				clsx(className),
			)}
			{...rest}
		>
			{props.children}
		</button>
	)
}
