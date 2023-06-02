import { FC } from 'react'
import { TextField } from '@mui/material';
import styles from './Block.module.scss'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { IForm } from '../../../types/types';
interface II {
	register: UseFormRegister<IForm>,
	errors: FieldErrors<IForm>
}
const BlockTheer:FC<II> = ({register, errors}) => {
	return (
		<div className={styles.block}>
					<TextField
						{...register('post', { required: false })}
						id="outlined-required"
						label='Должность'
						placeholder='Frontend Developer'
					/>
					<TextField
						{...register('desiredSalary', { required: false })}
						id="outlined-required"
						label='Желаемя зарплата'
						placeholder='90000'
					/>
					<TextField
						error={Boolean(errors.workSchedule?.message)}
						helperText={errors?.workSchedule?.message}
						{...register('workSchedule', { required: 'Укажите график' })}
						id="outlined-required"
						label='График работы'
						placeholder='Полный день'
					/>
					<TextField
						{...register('readiness', { required: false })}
						id="outlined-required"
						label='Готовность к командировкам'
						placeholder='Нет'
					/>
					<TextField
						{...register('busyness', { required: false })}
						id="outlined-required"
						label='Занятность'
						placeholder='8 часов'
					/>
				</div>
	)
}

export default BlockTheer
