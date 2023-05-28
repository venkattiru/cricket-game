import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './features/scoreSlice';

export const store = configureStore({
  reducer: {
    score: scoreReducer
  },
})