import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    totalScore: 0,
    totalWickets : 0,
    totalBalls:0,
    runScored:0
}

export const scoreSlice = createSlice({
    name: 'scorewicket',
    initialState,
    reducers: {
        addScore : (state, action) => {
            state.totalScore += action.payload;
        },
        addWickets : (state, action) => {
            state.totalWickets += action.payload;
        },
        addBalls : (state) => {
            state.totalBalls += 1;
        },
        resetScore : (state) => {
            state.totalScore =0;
            state.totalWickets =0;
            state.totalBalls =0;
        },
        getRun : (state, action) => {
            state.runScored = action.payload;
        }
    }
});

export const {addScore, addWickets, resetScore,addBalls,getRun} = scoreSlice.actions;

export default scoreSlice.reducer;