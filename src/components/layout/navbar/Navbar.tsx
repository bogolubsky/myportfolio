import React, { useState } from 'react'
import { motion } from 'framer-motion'
import NavbarLeft from '../../ui/navbar/navbar-left/NavbarLeft'
import NavbarCenter from '../../ui/navbar/navbar-center/NavbarCenter'
import NavbarRight from '../../ui/navbar/navbar-right/NavbarRight'
import styles from './Navbar.module.scss'

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(prev => !prev)
	const closeMenu = () => setIsOpen(false)

	return (
		<motion.nav
			className={styles.navbar}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			<div className={styles.navbar_container}>
				<NavbarLeft />
				<NavbarCenter isOpen={isOpen} closeMenu={closeMenu} />
				<NavbarRight isOpen={isOpen} toggleMenu={toggleMenu} />
			</div>
		</motion.nav>
	)
}

export default Navbar
