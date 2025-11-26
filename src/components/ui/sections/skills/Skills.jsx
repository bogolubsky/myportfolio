'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import CardSkills from '../../cards/card-skills/CardSkills'
import styles from './Skills.module.scss'

const skillsData = [
	{
		title: 'JavaScript',
		icon: '/images/icon_javascript.png',
		items: [
			[
				'ES6+ features',
				'Object- & Functional Programming',
				'Asynchronous programming (Promises, async/await)',
				'Modular code & code splitting',
				'Testing & Debugging (Jest, Mocha)',
				'Performance optimization',
			],
			'TypeScript',
			'Swiper.js',
			'GraphQL',
		],
	},
	{
		title: 'Vue',
		icon: '/images/icon_vue.png',
		items: [
			'Vue 3',
			'Nuxt 3',
			'Vue Router',
			'Pinia',
			'Vuex',
			'Vue-i18n',
			'Vue CLI',
		],
	},
	{
		title: 'React',
		icon: '/images/icon_react.png',
		items: [
			'React 19',
			'Next 15',
			'React Query',
			'Redux',
			'Redux Toolkit',
			'RTK Query',
			'Redux Saga',
			'Redux Thunk',
			'Zustand',
			'MobX',
			'i18next / next-intl',
		],
	},
	{
		title: 'CSS',
		icon: '/images/icon_css.png',
		items: [
			[
				'Flexbox',
				'Grid Layout',
				'Animations & Transitions',
				'Responsive design',
			],
			'SCSS / SASS',
			'Bootstrap 5',
			'Tailwind',
			'CSS-in-JS (styled-components, Emotion)',
		],
	},
	{
		title: 'HTML',
		icon: '/images/icon_html.png',
		items: [
			[
				'HTML5 semantics',
				'ARIA & Accessibility',
				'SEO Best Practices',
				'Microdata / Schema.org',
				'Responsive media embedding',
			],
			'GSAP',
		],
	},
	{
		title: 'Backend',
		icon: '/images/icon_backend.png',
		items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Prisma', 'MongoDB'],
	},
	{
		title: 'Tools',
		icon: '/images/icon_cube.png',
		items: [
			'Postman',
			'Vercel / Netlify',
			'Git',
			'Docker',
			'Webpack / Vite',
			'CI/CD (GitHub Actions, GitLab CI)',
		],
	},
]

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0 },
}

const Skills = () => {
	const t = useTranslations('skills')

	return (
		<motion.section
			className={styles.skills}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			id='skills'
		>
			<div className={styles.skillsContainer}>
				<motion.h2
					className={styles.skillsTitle}
					variants={{
						hidden: { opacity: 0, x: -20 },
						show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
					}}
				>
					{t('title')}
				</motion.h2>
				<motion.div className={styles.skillsItems} variants={containerVariants}>
					{skillsData.map((skill, index) => (
						<CardSkills
							key={index}
							title={skill.title}
							icon={skill.icon}
							items={skill.items}
							cardVariants={cardVariants}
						/>
					))}
				</motion.div>
			</div>
		</motion.section>
	)
}

export default Skills
