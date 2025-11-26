'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import styles from './HeaderTitle.module.scss'

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

export default function HeaderTitle() {
	const n = useTranslations('header')

	return (
		<motion.h1 className={styles.header_title} variants={textVariants}>
			{n('title.welcome')}
			<br />

			<motion.span
				className={styles.header_title__span1}
				variants={textVariants}
				transition={{ delay: 0.1 }}
			>
				{n('title.desktop')}
			</motion.span>

			<motion.span
				className={styles.header_title__span2}
				variants={textVariants}
				transition={{ delay: 0.2 }}
			>
				{n('title.mobile')}
			</motion.span>

			<motion.span
				className={styles.header_title__span3}
				variants={textVariants}
				transition={{ delay: 0.3 }}
			>
				{n('title.little.mobile')}
			</motion.span>
		</motion.h1>
	)
}
