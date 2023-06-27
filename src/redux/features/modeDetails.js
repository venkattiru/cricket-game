import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    mode: '',
    target: {
        currentTarget : 0,
        totalMatches : 0,
        totalWins : 0,
        totalLoss:0,
        totalTie:0,
    },
    highScore: 0
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        modeChange : (state, action) => {
            state.mode = action.payload.mode;
        },
        addTarget : (state, action) => {
            state.target.currentTarget = action.payload;
        },
        onTargetComplete : (state, action) => {
            state.target.totalMatches += 1;
            state.target.totalWins += action.payload.wins;
            state.target.totalLoss +=action.payload.loss;
            state.target.totalTie +=action.payload.Tie;

        },
        onHighScoreComplete : (state,action) => {
            state.highScore = action.payload.highScore;
        },
    }
});

export const {modeChange,addTarget, onTargetComplete, onHighScoreComplete} = modeSlice.actions;

export default modeSlice.reducer;