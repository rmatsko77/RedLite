import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSubreddits = createAsyncThunk(
    'subreddits/get',
    async () => {
        const res = await fetch('https://www.reddit.com/subreddits.json');
        const json = await res.json();
        return json.data.children.map((subreddit) => subreddit.data);
    }
)

const subreditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        subredditsLoading: false,
        subredditsError: false
    },
    reducers: {
        
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.subredditsLoading = true;
                state.subredditsError = false;
        } )
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.subreddits = action.payload;
                state.subredditsLoading = false;
                state.subredditsError = false;
        } )
            .addCase(fetchSubreddits.rejected, (state) => {
                state.subredditsLoading = false;
                state.subredditsError = true;
        } )
    }
})


export const selectSubreddits = state => state.subreddits.subreddits;
export default subreditsSlice.reducer;