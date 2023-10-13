import '../index.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'POS',
	description:
		'CPE334 - Software Engineer term project. The topic is POS ( Point of sale ) ',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
