import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (term) => {
        const res = await fetch(`https://www.reddit.com/search/.json?q=${term}&type=sr`);
        const json =  await res.json();
        return json.data.children.map(element => element.data)
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        results: '',
        searchLoading: false,
        searchError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearch.pending, (state) => {
            state.searchLoading = true;
            state.searchError = false;
        })
        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.results = action.payload;
            state.searchLoading = false;
            state.searchError = false;
        })
        builder.addCase(fetchSearch.rejected, (state) => {
            state.searchLoading = false;
            state.searchError = true;
        })
    }
})

export const selectSearchResults = state => state.search.results;
export default searchSlice.reducer;