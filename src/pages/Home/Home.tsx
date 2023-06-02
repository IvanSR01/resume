import { FC } from 'react'
import Header from '../../components/Header/Headet'
import Intro from '../../components/Intro/Intro'
import Resume from '../../components/resume/Resume'

const Home: FC = () => {
	return (
		<>
			<Header />
			<Intro />
			<Resume />
		</>
	)
}

export default Home
