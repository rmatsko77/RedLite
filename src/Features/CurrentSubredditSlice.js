import { createSlice } from "@reduxjs/toolkit";

const currentSubredditSlice = createSlice({
    name: 'currentSubreddit',
    initialState: {
        currentSubreddit: 'r/popular'
    },
    reducers: {
        updateCurrentSubreddit(state, action) {
            state.currentSubreddit = action.payload;
        }
    }
})

export const { updateCurrentSubreddit } = currentSubredditSlice.actions;
export const selectCurrentSubreddit = state => state.currentSubreddit.currentSubreddit;
export default currentSubredditSlice.reducer;