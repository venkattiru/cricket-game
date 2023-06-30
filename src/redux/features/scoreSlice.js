import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalScore: 0,
  totalWickets: 0,
  totalBalls: 0,
  runScored: 0,
  commentDesc: 'click on play button'
}

export const scoreSlice = createSlice({
  name: 'scorewicket',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.totalScore += action.payload
    },
    addWickets: (state, action) => {
      state.totalWickets += action.payload
    },
    addBalls: (state) => {
      state.totalBalls += 1
    },
    resetScore: (state) => {
      state.totalScore = 0
      state.totalWickets = 0
      state.totalBalls = 0
      state.runScored = 0
      state.commentDesc = 'Click on play to start'
    },
    getRun: (state, action) => {
      state.runScored = action.payload
    },
    getDesc: (state, action) => {
      state.commentDesc = action.payload
    }
  }
})

export const { addScore, addWickets, resetScore, addBalls, getRun, getDesc } = scoreSlice.actions

export default scoreSlice.reducer
