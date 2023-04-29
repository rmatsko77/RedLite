import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subredditsReducer from '../Features/SubredditSlice';
import feedReducer from '../Features/FeedSlice'
import currentSubredditReducer from "../Features/CurrentSubredditSlice";
import searchTermReducer from '../Features/SearchTermSlice';

const store = configureStore({
    reducer: combineReducers({
        subreddits: subredditsReducer,
        feed: feedReducer,
        currentSubreddit: currentSubredditReducer,
        searchTerm: searchTermReducer
    })
})

export default store;