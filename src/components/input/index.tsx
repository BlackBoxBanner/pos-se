import { clsx } from 'clsx'
import { ComponentProps, forwardRef, ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
	id: string
	label: string
	error?: string
}

export const Input = forwardRef(
	(props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const { className, label, error, ...rest } = props // Extract rest of the props

		return (
			<div>
				<div className={twMerge('flex gap-2 items-center')}>
					<label htmlFor={props.id}>{label}</label>
					<input
						className={twMerge(
							'border p-1 border-black rounded-md',
							clsx(className),
						)}
						ref={ref}
						{...rest}
					/>
				</div>
				<div>{error}</div>
			</div>
		)
	},
)
