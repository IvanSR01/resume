import { FC } from 'react'
import styles from './Result.module.scss'
import { useAppSelector } from '../../redux/hook'
import RowOne from './Rows/RowOne'
import RowTwo from './Rows/RowTwo'
import RowThree from './Rows/RowThree'
const Result: FC = () => {
	const item = useAppSelector(state => state.resume.item)
	console.log(item.experience)
	return (
		<div className={styles.wrapper}>
			<div className={styles.bar}></div>
			<RowOne {...item} />
			<RowTwo {...item} />
			<RowThree {...item} />
			<div className={styles.row__last}>
				{item.experience.length === 0 ?
					<div className={styles.none}>Нет Опыта</div> :
					<>{
						item.experience.map((item, i) => (
							<div key={i} className={styles.experienceBlock}>
							<div className={styles.organization}>
								<h2>Организация - {item.organization}</h2>
							</div>
							<div className={styles.organization}>
								<h3>Должность - {item.post}</h3>
							</div>
							<div className={styles.organization}>
								<h4>Отработано - {item.experience} дней</h4>
							</div>
						</div>
						))
					}</>}
			</div>
		</div>
	)
}

export default Result
