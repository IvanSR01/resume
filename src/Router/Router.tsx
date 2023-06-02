import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Result from '../pages/Result/Result'

const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/result' element={<Result/>} />
		</Routes>
	)
}

export default Router
