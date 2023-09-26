import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'POS',
	description:
		'CPE334 - Software Engineer term project. The topic is POS ( Point of sale ) ',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
