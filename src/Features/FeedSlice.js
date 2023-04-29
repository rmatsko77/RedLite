import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/fetchFeed',
    async (sub) => {
        const res = await fetch(`https://www.reddit.com/${sub}.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
)

const feedSlice =  createSlice({
    name: 'feed',
    initialState: {
        feed: [],
        selectedSubreddit: 'r/popular',
        searchTerm: '',
        isLoading: false,
        error: false,
    },
    reducers: {
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFeed.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        builder.addCase(fetchFeed.fulfilled, (state, action) => {
            state.feed = action.payload;
            state.isLoading = false;
            state.error = false;
        })
        builder.addCase(fetchFeed.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const { setSelectedSubreddit, setSearchTerm } = feedSlice.actions;
export const selectFeed = state => state.feed.feed;
export const selectSelectedSubreddit = state => state.feed.selectedSubreddit;
export const selectSearchTerm =  state => state.feed.searchTerm;
export default feedSlice.reducer;