import { FC } from 'react'
import { TextField } from '@mui/material';
import styles from './Block.module.scss'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { IForm } from '../../../types/types';
interface II {
	register: UseFormRegister<IForm>,
	errors: FieldErrors<IForm>
}
const BlockTwo:FC<II> = ({register, errors}) => {
	return (
		<div className={styles.block}>
					<TextField
						error={Boolean(errors.number?.message)}
						helperText={errors?.number?.message}
						{...register('number', { required: 'Укажите номер' })}
						id="outlined-required"
						label='Номер'
						placeholder='+7900000000'
					/>
					<TextField
						error={Boolean(errors.email?.message)}
						helperText={errors?.email?.message}
						{...register('email', { required: 'Укажите почту' })}
						id="outlined-required"
						label='Email'
						placeholder='Test@test.com'
					/>
				</div>
	)
}

export default BlockTwo

