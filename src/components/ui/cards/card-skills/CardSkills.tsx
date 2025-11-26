import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import styles from './CardSkills.module.scss'

const listItemVariants = {
	hidden: { opacity: 0, x: -10 },
	show: { opacity: 1, x: 0 },
}

interface SkillCardProps {
	title: string
	icon: string
	items: (string | string[])[]
	cardVariants: Variants
}

const SkillCard: React.FC<SkillCardProps> = ({
	title,
	icon,
	items,
	cardVariants,
}) => {
	return (
		<motion.div
			className={styles.skillCard}
			variants={cardVariants}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.3 }}
		>
			<div className={styles.titleContainer}>
				<motion.h4
					className={styles.skillName}
					variants={listItemVariants}
					transition={{ duration: 0.3, delay: 0.1 }}
				>
					{title}
				</motion.h4>
				<motion.div
					variants={listItemVariants}
					initial={{ y: 0 }}
					animate={{ y: [0, -5, 0, 5, 0] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: [0.5, 0, 0.5, 0],
						delay: 0.15,
					}}
				>
					<Image
						src={icon}
						alt={title}
						width={44}
						height={44}
						className={styles.icon}
					/>
				</motion.div>
			</div>
			<div className={styles.content}>
				<motion.ul
					className={styles.contentList}
					initial='hidden'
					animate='show'
				>
					{items.map((item, idx) => (
						<motion.li
							key={idx}
							className={styles.contentItem}
							variants={listItemVariants}
							transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
						>
							{Array.isArray(item) ? (
								<>
									<p>{title}</p>
									<ul>
										{item.map((subItem, subIdx) => (
											<motion.li
												key={subIdx}
												className={styles.contentSubItem}
												variants={listItemVariants}
												transition={{
													duration: 0.3,
													delay: 0.3 + subIdx * 0.1,
												}}
											>
												{subItem}
											</motion.li>
										))}
									</ul>
								</>
							) : (
								item
							)}
						</motion.li>
					))}
				</motion.ul>
			</div>
		</motion.div>
	)
}

export default SkillCard
