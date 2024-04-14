import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '../styles/globals.css'

const notoSans = Noto_Sans_KR({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-noto-sans',
})

export const metadata: Metadata = {
	title: 'Learn NextJS',
	description: 'First project on NextJS',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${notoSans.variable}`}>{children}</body>
		</html>
	)
}
