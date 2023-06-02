import { FC } from 'react'
import { TextField } from '@mui/material';
import styles from './Block.module.scss'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { IForm } from '../../../types/types';
interface II {
	register: UseFormRegister<IForm>,
	errors: FieldErrors<IForm>
}
const BlockFour:FC <II> = ({register, errors}) => {
	return (
		<div className={styles.block}>
					<TextField
						{...register('citizenship', { required: false })}
						id="outlined-required"
						label='Гражданство'
						placeholder='РФ'
					/>
					<TextField
						{...register('city', { required: false })}
						id="outlined-required"
						label='Город проживания'
						placeholder='Москва'
					/>
					<TextField
						error={Boolean(errors.gender?.message)}
						helperText={errors?.gender?.message}
						{...register('gender', { required: 'Укажите пол' })}
						id="outlined-required"
						label='Пол'
						placeholder=''
					/>
					<TextField
						error={Boolean(errors.date?.message)}
						helperText={errors?.date?.message}
						{...register('date', { required: 'Укажите дату рождения' })}
						id="outlined-required"
						label='Дата рождения'
						placeholder='01.01.2000'
					/>
					<TextField
						{...register('education', { required: false })}
						id="outlined-required"
						label='Образование'
						placeholder='Средние'
					/>
				</div>
	)
}

export default BlockFour
