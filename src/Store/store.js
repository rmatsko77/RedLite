import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from '../Features/SubredditSlice';

const store = configureStore({
    reducer: combineReducers({
        subreddits: subredditsReducer
    })
})

export default store;