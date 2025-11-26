import React from 'react'
import styles from './NavbarLeft.module.scss'
import LanguageSwitcher from '../../language-switcher/LanguageSwitcher'
import Button from '../../buttons/Button'
import { useTranslations } from 'next-intl'

const NavbarLeft: React.FC = () => {
	const t = useTranslations('button')

	return (
		<div className={styles.left}>
			<div>
				<Button name={t('go')} />
				<LanguageSwitcher />
			</div>
		</div>
	)
}

export default NavbarLeft
