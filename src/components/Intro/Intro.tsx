import { FC } from 'react'
import styles from './Intro.module.scss';

const Intro: FC = () => {
	const onClick = () => {
		window.scrollTo({
			top: 700,
			behavior: "smooth",
		});
	}
	return (
		<div className={styles.wrapper}>
			<h3>БЕСПЛАТНЫЙ ОНЛАЙН КОНСТРУКТОР</h3>
			<p className={styles.create}>Создай профессиональное</p>
			<p className={styles.time}>резюме всего за 7 минут</p>
			<button onClick={() => onClick()}>СОЗДАЙ СВОЁ РЕЗЮМЕ</button>
		</div>
	)
}

export default Intro
