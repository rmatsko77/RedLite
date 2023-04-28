import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from '../Features/SubredditSlice';
import feedReducer from '../Features/FeedSlice'
import currentSubredditReducer from "../Features/CurrentSubredditSlice";

const store = configureStore({
    reducer: combineReducers({
        subreddits: subredditsReducer,
        feed: feedReducer,
        currentSubreddit: currentSubredditReducer,
    })
})

export default store;