'use client'

import Navbar from '@/components/layout/navbar/Navbar'
import styles from './page.module.scss'
import Header from '@/components/layout/header/Header'
import Services from '@/components/ui/sections/services/Services'
import About from '@/components/ui/sections/about/About'
import Skills from '@/components/ui/sections/skills/Skills'

export default function HomePage() {
	return (
		<div className={styles.page}>
			<Navbar />
			<div className={styles.wrapper}>
				<Header />
				<main className={styles.main}>
					<Services />
					<About />
					<Skills />
				</main>
			</div>
		</div>
	)
}
