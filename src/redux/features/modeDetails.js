import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: '',
  target: {
    currentTarget: 0,
    totalMatches: 0,
    totalWins: 0,
    totalLoss: 0,
    totalTie: 0
  },
  highScore: 0
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    modeChange: (state, action) => {
      state.mode = action.payload.mode
    },
    addTarget: (state, action) => {
      state.target.currentTarget = action.payload
    },
    onTargetComplete: (state, action) => {
      state.target.totalMatches += 1
      if (action.payload.status === 'won') {
        state.target.totalWins += 1
      } else {
        state.target.totalLoss += 1
      }
      state.target.totalTie = 0
    },
    onHighScoreComplete: (state, action) => {
      state.highScore = action.payload.highScore
    }
  }
})

export const { modeChange, addTarget, onTargetComplete, onHighScoreComplete } = modeSlice.actions

export default modeSlice.reducer
