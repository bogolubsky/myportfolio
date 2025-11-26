import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export type Locale = 'en' | 'de' | 'ua' | 'ru' | 'fr' | 'es' | 'cn'
export const locales: Locale[] = ['en', 'de', 'ua', 'ru', 'fr', 'es', 'cn']

export const routing = defineRouting({
	locales,
	defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing)
