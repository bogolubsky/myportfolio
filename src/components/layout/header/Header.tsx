'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import styles from './Header.module.scss'
import Button from '@/components/ui/buttons/Button'
import HeaderTitle from '@/components/ui/titles/header-title/HeaderTitle'
import Image from 'next/image'

export default function Header() {
	const n = useTranslations('header')
	const b = useTranslations('button')

	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
				staggerChildren: 0.2,
			},
		},
	}

	const imageVariants = {
		hidden: { opacity: 0, x: 50 },
		show: { opacity: 1, x: 0 },
	}

	return (
		<motion.header
			className={styles.header}
			initial='hidden'
			animate='show'
			variants={containerVariants}
		>
			<motion.div
				className={styles.header_container}
				variants={containerVariants}
			>
				<HeaderTitle />
				<motion.p variants={containerVariants}>{n('description')}</motion.p>
				<motion.div variants={containerVariants}>
					<Button name={b('write')} />
					<Button name={b('skills')} />
				</motion.div>
			</motion.div>

			<motion.div
				variants={imageVariants}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<Image src='/images/hero.png' alt='hero' width={720} height={964} />
			</motion.div>
		</motion.header>
	)
}
