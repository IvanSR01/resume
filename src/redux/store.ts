import { configureStore } from '@reduxjs/toolkit'
import resumeSlice from './store/resumeSlice'


const store = configureStore({
	reducer:{
		resume: resumeSlice
	}
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch  
