import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from '../Features/SubredditSlice';
import feedReducer from '../Features/FeedSlice'

const store = configureStore({
    reducer: combineReducers({
        subreddits: subredditsReducer,
        feed: feedReducer
    })
})

export default store;