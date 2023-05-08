import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from '../Features/SubredditSlice';
import feedReducer from '../Features/FeedSlice.js'
import searchReducer from '../Features/SearchSlice.js';

const store = configureStore({
    reducer: combineReducers({
        subreddits: subredditsReducer,
        feed: feedReducer,
        search: searchReducer
    })
})

export default store;