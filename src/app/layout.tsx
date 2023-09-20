import "../index.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "POS",
	description: "CPE334 - Software Engineer term project. The topic is POS ( Point of sale ) ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
