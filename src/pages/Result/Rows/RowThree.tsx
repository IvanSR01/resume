import { FC } from 'react'
import styles from '../Result.module.scss'

type TypeRowThree = {
	citizenship:string;
	gender:string;
	date:string;
	education:string
}

const RowThree: FC<TypeRowThree> = ({citizenship, gender, date, education}) => {
	return (
		<div className={styles.row__Three}>
				<header>
					<img src="public/user.png" alt="" />
					<h2>Обо мне</h2>
				</header>
				{citizenship &&
					<div className={styles.desc}>
						<h2>Гражданство</h2>
						<p>{citizenship}</p>
					</div>}
				<div className={styles.desc}>
					<h2>Пол</h2>
					<p>{gender}</p>
				</div>
				<div className={styles.desc}>
					<h2>Дата рождения</h2>
					<p>{date}</p>
				</div>
				{education &&
					<div className={styles.desc}>
						<h2>Образование</h2>
						<p>{education}</p>
					</div>}
			</div>
	)
}

export default RowThree
