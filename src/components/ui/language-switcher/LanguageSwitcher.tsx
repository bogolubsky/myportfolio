'use client'

import { useRouter, usePathname } from 'next/navigation'
import styles from './LanguageSwitcher.module.scss'

const locales = ['en', 'ru', 'fr', 'de', 'es', 'ua', 'cn']

export default function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<div className={styles.languageSwitcher}>
			<select
				onChange={e => {
					const newLocale = e.target.value
					router.push(`/${newLocale}${pathname.substring(3)}`)
				}}
				defaultValue={pathname.split('/')[1]}
			>
				{locales.map(locale => (
					<option key={locale} value={locale}>
						{locale.toUpperCase()}
					</option>
				))}
			</select>
		</div>
	)
}
