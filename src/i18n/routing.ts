import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
	locales: ['en', 'de', 'ua', 'ru', 'fr', 'es', 'cn'],

	defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing)
