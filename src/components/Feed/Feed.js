import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubreddit, setSearchTerm, selectFeed, fetchFeed, selectSelectedSubreddit } from "../../Features/FeedSlice";
import { Post } from '../Post/Post.js'
import store from "../../Store/store";
import { FeedLoading } from "../FeedLoading/FeedLoading";

export function Feed() {

    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feed);
    const { isLoading, error, searchTerm, selectedSubreddit } = feed;
    const state = store.getState();

    useEffect(() => {
        dispatch(fetchFeed(selectedSubreddit))
    }, [selectedSubreddit])

    if(isLoading) {
        return (
            <FeedLoading />
        )
    } else {
        return (
        <ul>
            <h3>Top Posts in {selectedSubreddit}</h3>
            {feed.feed.map(post => {
            const title = post.title;
            const subreddit = post.subreddit_name_prefixed;
            const author = post.author;
            return <Post 
                title={title}
                subreddit={subreddit}
                author={author}
                />})}
        </ul>
        )}
}
