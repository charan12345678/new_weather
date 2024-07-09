import { configureStore } from '@reduxjs/toolkit'
import studentSlice from './feature_slices/studentSlice'

export default configureStore({
  reducer: {
    student : studentSlice,
  },
})

