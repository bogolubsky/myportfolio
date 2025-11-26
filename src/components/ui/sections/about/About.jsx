'use client'

import { motion } from 'framer-motion'
import styles from './About.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const socialLinks = [
	{
		href: 'https://t.me/potato_d',
		src: '/images/icon_telegram.png',
		alt: 'Telegram',
	},
	{
		href: 'viber://chat?number=%2B380931226277',
		src: '/images/icon_viber.png',
		alt: 'Viber',
	},
	{
		href: 'tel:+380931226277',
		src: '/images/icon_phone.png',
		alt: 'Phone',
	},
]

const experience = [
	{ time: '4.0+', field: 'frontend' },
	{ time: '2.5+', field: 'vue / react' },
	{ time: '1.0+', field: 'backend' },
]

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}

const scaleUp = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 },
}

export default function About() {
	const t = useTranslations('about')

	return (
		<section className={styles.about} id='about'>
			<motion.div
				className={styles.container}
				variants={containerVariants}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.h2
					className={styles.title}
					viewport={{ once: true, amount: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -20 },
						show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
					}}
				>
					{t('title')}
				</motion.h2>
				<motion.div
					className={styles.content}
					variants={fadeInUp}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<motion.div
						className={styles.image}
						variants={scaleUp}
						transition={{ duration: 0.5, delay: 0.3 }}
					></motion.div>

					<motion.div
						className={styles.info}
						variants={fadeInUp}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className={styles.header}>
							<motion.h3
								className={styles.name}
								variants={fadeInUp}
								transition={{ duration: 0.5, delay: 0.5 }}
							>
								{t('name')}
							</motion.h3>
							<motion.div
								className={styles.icons}
								variants={fadeInUp}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								{socialLinks.map(({ href, src, alt }) => (
									<motion.a
										key={alt}
										href={href}
										variants={fadeInUp}
										transition={{ duration: 0.5 }}
									>
										<Image src={src} alt={alt} width={32} height={32} />
									</motion.a>
								))}
							</motion.div>
						</div>
						<motion.p
							className={styles.description}
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							{t('description')}
						</motion.p>
						<motion.div
							className={styles.experience}
							variants={containerVariants}
							initial='hidden'
							animate='show'
						>
							{experience.map(({ time, field }, index) => (
								<motion.div
									key={field}
									className={styles.experienceItem}
									variants={fadeInUp}
									transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
								>
									<h5 className={styles.experienceTitle}>{time}</h5>
									<p className={styles.experienceDescription}>
										{t('time')} {field}
									</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	)
}
