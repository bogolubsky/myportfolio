import React from 'react'
import styles from './NavbarRight.module.scss'
import Image from 'next/image'

interface NavbarRightProps {
	isOpen: boolean
	toggleMenu: () => void
}

const NavbarRight: React.FC<NavbarRightProps> = ({ isOpen, toggleMenu }) => {
	return (
		<div className={styles.right}>
			<button
				className={`${styles.burger} ${isOpen ? styles.open : ''}`}
				onClick={toggleMenu}
				aria-label='Toggle menu'
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
				<a href='https://t.me/potato_d' target='_blank'>
					<Image
						src='/images/icon_telegram.png'
						alt='Telegram'
						width={32}
						height={32}
					/>
				</a>
				<a href='viber://chat?number=380991429452' target='_blank'>
					<Image
						src='/images/icon_viber.png'
						alt='Viber'
						width={32}
						height={32}
					/>
				</a>
				<a href='tel:+380991429452'>
					<Image
						src='/images/icon_phone.png'
						alt='Phone'
						width={32}
						height={32}
					/>
				</a>
			</div>
		</div>
	)
}

export default NavbarRight
