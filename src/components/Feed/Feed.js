import React, { useEffect } from "react";
import { selectFeed, fetchFeed } from "../../Features/FeedSlice";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../Post/Post";
import './Feed.css'
import store from "../../Store/store";

export function Feed() {

    const dispatch = useDispatch();
    const state = store.getState();
    const feed = useSelector(selectFeed);

    useEffect(()=> {
        dispatch(fetchFeed(state.currentSubreddit.currentSubreddit));
    },)

    return(
        <div>
            <h3>Top posts in {state.currentSubreddit.currentSubreddit}</h3>
            <ul className="post-list">
                {feed.map(post => {
            return <Post 
                title={post.title}
                author={post.author}
                subreddit={post.subreddit_name_prefixed}
            />
        })}
            </ul>
        </div>
    )
}
