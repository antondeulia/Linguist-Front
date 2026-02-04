import type { Metadata } from "next"
import { Fredoka } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
	title: "Linguist v1",
}

const fredoka = Fredoka({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={fredoka.className}>{children}</body>
		</html>
	)
}
