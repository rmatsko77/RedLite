import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSubreddits = createAsyncThunk(
    'subreddits/getSubreddits',
    async () => {
        const res = await fetch(`https://www.reddit.com/subreddits.json`);
        const json = await res.json();
        return json.data.children.map((subreddit) => subreddit.data)
    }
)

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: true,
        error: false
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubreddits.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.error = false;
        })
        builder.addCase(fetchSubreddits.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const selectSubreddits = state => state.subreddits.subreddits;
export default subredditsSlice.reducer;