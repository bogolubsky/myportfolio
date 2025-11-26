import { useTranslations } from 'next-intl'
import styles from './CardServices.module.scss'
import Image from 'next/image'
import Button from '../../buttons/Button'

export default function CardServices({ title, description, imageSrc }) {
	const t = useTranslations('services')

	return (
		<a
			href='http://t.me/potato_d'
			target='_blank'
			className={styles.service_card}
		>
			<div className={styles.service_card__content}>
				<div className={styles.service_card__title}>
					<h3>{title}</h3>
					<Image src={imageSrc} alt={title} width={62} height={52} />
				</div>
				<p>{description}</p>
			</div>
			<Button name={t('item.button')} />
		</a>
	)
}
