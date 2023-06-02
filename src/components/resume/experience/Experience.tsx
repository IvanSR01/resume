import { FC, useState } from 'react'
import styles from './Experience.module.scss'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../redux/hook';
import { setItemsStepTwo } from '../../../redux/store/resumeSlice';
import { useForm } from 'react-hook-form';
export interface IExperience {
	organization: string;
	post: string;
	experience: string;
}
interface IOpen {
	isOpen: boolean
}
const Experience: FC<IOpen> = ({ isOpen }) => {
	const dispatch = useAppDispatch()
	const { register, handleSubmit} = useForm<IExperience>({ mode: 'onChange' })
	const [obj, setObj] = useState<IExperience[]>([])
	const onClickToArr = (values: IExperience) => {
		setObj([...obj, values])
	}
	const onClickToRemoveMas = (organization: string) => {
		setObj(obj.filter(item => item.experience === organization))
	}
	const onClickToResult = () => {
		if (obj.length > 0) {
			dispatch(setItemsStepTwo(obj))
		}
	}
	return (
		<div className={`${styles.wrapper} ${isOpen ? '' : styles.hidden}`}>
			<form onSubmit={handleSubmit(onClickToArr)}>
				<div className={styles.exe}>
					<TextField
						{...register('organization', { required: false })}
						id="outlined-required"
						label='Организация'
						placeholder='ООО"Шавуха228"'
					/>
					<TextField
						{...register('post', { required: false })}
						id="outlined-required"
						label='Должность'
						placeholder=''
					/>
					<TextField
						{...register('experience', { required: false })}
						id="outlined-required"
						label='Дней проработано'
						placeholder='2'
					/>
					<Button type='submit' color="secondary" variant="contained">Добавить</Button>
				</div>
			</form>
			{obj.length === 0 ? <></> : <div className={styles.items}>{
				obj.map((item, i) => (
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
						<Button color="secondary" variant="contained" onClick={() => onClickToRemoveMas(item.organization)}>Удалить</Button>
					</div>
				))
			}</div>}
			<div className={styles.create}>
				<Link to='/result'>
					<Button onClick={() => onClickToResult()} color="secondary" variant="contained">Создать резюме</Button>
				</Link>
			</div>
		</div>
	)
}



export default Experience
