import '@/styles/globals.scss'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Locale, locales } from '@/i18n/routing'
import { ReactNode } from 'react'

interface LocaleLayoutProps {
	children: ReactNode
	params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params

	if (!locales.includes(locale)) notFound()

	const messages = await getMessages({ locale })

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
