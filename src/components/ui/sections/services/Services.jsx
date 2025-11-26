'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import styles from './Services.module.scss'
import CardServices from '../../cards/card-services/CardServices'

export default function Services() {
	const t = useTranslations('services')

	const services = Object.keys(t.raw('item.title')).map(key => ({
		title: t(`item.title.${key}`),
		titleName: key,
		description: t(`item.description.${key}`),
	}))

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	}

	return (
		<section className={styles.services} id='services'>
			<motion.h2
				className={styles.services_title}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -20 },
					show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
				}}
			>
				{t('title')}
			</motion.h2>
			<motion.div
				className={styles.services_items}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				variants={containerVariants}
			>
				{services.map((service, index) => {
					const imageSrc =
						service.titleName === 'animated'
							? '/images/icon_code_gold.png'
							: '/images/icon_code.png'

					return (
						<motion.div
							key={index}
							className={styles.service_card}
							variants={cardVariants}
							whileHover={{ scale: 1.03 }}
							transition={{ duration: 0.3 }}
						>
							<CardServices
								title={service.title}
								description={service.description}
								imageSrc={imageSrc}
							/>
						</motion.div>
					)
				})}
			</motion.div>
		</section>
	)
}
