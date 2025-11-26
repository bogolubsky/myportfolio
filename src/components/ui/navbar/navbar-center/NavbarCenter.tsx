import React from 'react'
import styles from './NavbarCenter.module.scss'
import { useTranslations } from 'next-intl'

interface NavbarCenterProps {
	isOpen: boolean
	closeMenu: () => void
}

const NavbarCenter: React.FC<NavbarCenterProps> = ({ isOpen, closeMenu }) => {
	const t = useTranslations('header')

	return (
		<div className={`${styles.center} ${isOpen ? styles.open : ''}`}>
			<a href='#about' onClick={closeMenu}>
				{t('configurations.about')}
			</a>
			<a href='#skills' onClick={closeMenu}>
				{t('configurations.skills')}
			</a>
			<a href='#services' onClick={closeMenu}>
				{t('configurations.services')}
			</a>
		</div>
	)
}

export default NavbarCenter
