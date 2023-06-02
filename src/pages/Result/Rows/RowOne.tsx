import { FC } from 'react'
import styles from '../Result.module.scss'

type TypeRowOne = {
	lastName: string;
	firstName: string;
	patronymic?: string;
	post?: string;
	number:string;
	email:string;
	city:string;
}

const RowOne: FC<TypeRowOne> = ({ lastName, firstName, patronymic, post, number, email, city }) => {
	return (
		<div className={styles.row__one}>
			<div><img src="public/user.png" alt="" /></div>
			<div>
				<div className={styles.name}>
					<p>{lastName}</p>
					<p>{firstName}</p>
					{patronymic && <p>{patronymic}</p>}
				</div>
				{post && <div className={styles.post}>{post}</div>}
				<div className={styles.desc}>
					<img src='public/icons8-phone.svg' alt="" />
					<p>{number}</p>
				</div>
				<div className={styles.desc}>
					<img src='public/icons8-email-48.png' alt="" />
					<p>{email}</p>
				</div>
				<div className={styles.desc}>
					<img src='public/icons8-user-location-100.png' alt="" />
					<p>{city}</p>
				</div>
			</div>
		</div>
	)
}

export default RowOne
