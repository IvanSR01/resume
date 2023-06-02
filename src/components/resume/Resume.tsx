import { FC, useState } from 'react'
import styles from './Resume.module.scss';
import Block from './Blok/Block';
import Experience from './experience/Experience';

const Resume: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<div className={styles.wrapper}>
			<Block setIsOpen={() => setIsOpen(true)}/>
			<Experience isOpen={isOpen} />
		</div>
	)
}

export default Resume
