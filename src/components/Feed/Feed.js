import React, { useEffect } from "react";
import { selectFeed, fetchFeed } from "../../Features/FeedSlice";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../Post/Post";
import './Feed.css'

export function Feed() {

    const dispatch = useDispatch();
    const feed = useSelector(selectFeed);
    let feedList = '';
    console.log(feed)

    useEffect(() => {
        dispatch(fetchFeed())
    }, [dispatch]);

    if(feedList.length){
        return;
    } else {
        feedList = feed.map(post => {
            return <Post 
                title={post.title}
                author={post.author}
                subreddit={post.subreddit_name_prefixed}
            />
        })
    }

    return(
        <div>
            <h3>Top posts in REPLACE THIS</h3>
            <ul className="post-list">
                {feedList}
            </ul>
        </div>
    )
}
