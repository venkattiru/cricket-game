import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './features/scoreSlice'
import modeReducer from './features/modeDetails'

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    mode: modeReducer
  }
})
