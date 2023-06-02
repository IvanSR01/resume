import { FC } from 'react'
import { TextField } from '@mui/material';
import styles from './Block.module.scss'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { IForm } from '../../../types/types';
interface II {
	register: UseFormRegister<IForm>,
	errors: FieldErrors<IForm>
}
const BlockOne: FC<II> = ({ register, errors }) => {
	return (
		<div className={styles.block}>
			<TextField
				error={Boolean(errors.firstName?.message)}
				helperText={errors?.firstName?.message}
				{...register('firstName', { required: 'Укажите имя' })}
				id="outlined-required"
				label='Имя'
				placeholder='Иван'
			/>
			<TextField
				error={Boolean(errors.lastName?.message)}
				helperText={errors?.lastName?.message}
				{...register('lastName', { required: 'Укажите фамилию' })}
				id="outlined-required"
				label='Фамилия'
				placeholder='Иванов'
			/>
			<TextField
				{...register('patronymic', { required: false })}
				id="outlined-required"
				label='Отчество'
				placeholder='Иванович'
			/>
		</div>
	)
}

export default BlockOne
