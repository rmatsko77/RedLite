import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchTerm = createAsyncThunk(
    'searchTerm/get',
    async () => {
        const data = await fetch(`https://www.reddit.com/search/?q=$halo&type=sr.json`);
        const res = await data.json();
        return res.data.children.map((sub) => sub.data);
    }
)

export const searchTermSlice =  createSlice({
    name: 'searchTerm',
    initialState: {
        searchTerm: '',
        termBeingSearchedLoading: false,
        termBeingSearchedError: false
    },
    reducers: {
        updateSearchTerm(state, action) {
            state.searchTerm = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSearchTerm.pending, (state) => {
                state.termBeingSearchedLoading = true;
                state.termBeingSearchedError = false
            } )
            .addCase(fetchSearchTerm.fulfilled, (state, action) => {
                state.termBeingSearched = action.payload
                state.termBeingSearchedLoading = false;
                state.termBeingSearchedError = false;
            } )
            .addCase(fetchSearchTerm.rejected, (state) => {
                state.termBeingSearchedLoading = false;
                state.termBeingSearchedError = true
            })

    }
    
})

export const { updateSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
export const selectSearchTerm = state => state.searchTerm.searchTerm;
export const selectTermBeingSearched = state => state.termBeingSearched.termBeingSearched