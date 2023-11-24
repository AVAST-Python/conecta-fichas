import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import boardReducer from '../features/boardSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
  },
})
