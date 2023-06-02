import { FC } from 'react'
import styles from '../Result.module.scss'
type TypeRowTwo = {
	desiredSalary: number;
	workSchedule: string;
	busyness: string;
	readiness: string
}

const RowTwo: FC<TypeRowTwo> = ({ desiredSalary, workSchedule, busyness, readiness }) => {
	return (
		<div className={styles.row__two}>
			{desiredSalary === 0 ?
				<></> :
				<div className={styles.desc}>
					<h2>Желаямая зарплата</h2>
					<p>{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'Rub'
				}).format(Number(desiredSalary))}</p>
				</div>}
			<div className={styles.desc}>
				<h2>График роботы</h2>
				<p>{workSchedule}</p>
			</div>
			{busyness &&
				<div className={styles.desc}>
					<h2>Занятность</h2>
					<p>{busyness}</p>
				</div>}
			{readiness &&
				<div className={styles.desc}>
					<h2>Готовность к компандировкам</h2>
					<p>{readiness}</p>
				</div>}
		</div>
	)
}

export default RowTwo
