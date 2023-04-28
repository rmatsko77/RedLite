import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/get',
    async (sub) => {
        const data = await fetch(`https://www.reddit.com/${sub}/hot.json`);
        const res = await data.json();
        return res.data.children.map((post) => post.data);
    }
)

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: [],
        feedLoading: false,
        feedError: false
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFeed.pending, (state) => {
                state.feedLoading = true;
                state.feedError = false;
        } )
            .addCase(fetchFeed.fulfilled, (state, action) => {
                state.feed = action.payload;
                state.feedLoading = false;
                state.feedError = false;
        } )
            .addCase(fetchFeed.rejected, (state) => {
                state.feedLoading = false;
                state.feedError = true;
        } )
    }
})

export const selectFeed = state => state.feed.feed;
export default feedSlice.reducer;