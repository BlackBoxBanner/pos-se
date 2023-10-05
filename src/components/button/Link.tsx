import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

type LinkProps = ComponentProps<typeof Link>

function LinkComponent(props: LinkProps) {
	const { children, className, ...rest } = props
	return (
		<Link
			className={twMerge(
				'border border-black px-4 py-2 rounded-md hover:text-white hover:bg-black transition-all ease-in-out duration-300',
				clsx(className),
			)}
			{...rest}
		>
			{children}
		</Link>
	)
}

export { LinkComponent as Link }
