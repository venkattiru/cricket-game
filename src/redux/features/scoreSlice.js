import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    totalScore: 0,
    totalWickets : 0
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
        resetScore : (state) => {
            state.totalScore =0;
            state.totalWickets =0;
        }
    }
});

export const {addScore, addWickets, resetScore} = scoreSlice.actions;

export default scoreSlice.reducer;