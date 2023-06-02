import { FC } from 'react'
import styles from './Block.module.scss';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import BlockOne from './BlockOne'
import BlockTwo from './BlockTwo';
import BlockTheer from './BlockTheer';
import BlockFour from './BlockFour';
import { IForm } from '../../../types/types';
import { useAppDispatch } from '../../../redux/hook';
import { setItemsStepOne } from '../../../redux/store/resumeSlice';

interface IBlock {
	setIsOpen: () => void
}

const Block: FC<IBlock> = ({setIsOpen}) => {
	const { register, handleSubmit, formState: { errors } } = useForm<IForm>({ mode: 'onChange' })
	const dispatch = useAppDispatch()
	const onSubmit = (data: IForm) => {
		dispatch(setItemsStepOne(data))
		setIsOpen()
	}
		return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<BlockOne register={register} errors={errors} />
				<BlockTwo register={register} errors={errors} />
				<BlockTheer register={register} errors={errors} />
				<BlockFour register={register} errors={errors} />
				<div className={styles.button}>
					<Button type='submit' color="secondary" variant="contained">Далее</Button>
				</div>
			</form>
		</div>
		)
}

		export default Block
