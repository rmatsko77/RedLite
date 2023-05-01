import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubreddit, setSearchTerm, selectFeed, fetchFeed, selectSelectedSubreddit } from "../../Features/FeedSlice";
import { Post } from '../Post/Post.js'
import store from "../../Store/store";
import { FeedLoading } from "../FeedLoading/FeedLoading";
import { FeedError } from "../FeedError/FeedError";
import './Feed.css'

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
            <div className="feed">
                <ul>
                    <h3 className="feed-title">Your feed is Loading...</h3>
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                    <FeedLoading />
                </ul>
            </div>
        )
    } 
    if(error) {
        return (
            <FeedError />
        )
    }
    else {
        return (
            <div className="feed">
                <ul>
                    <h3 className="feed-title">Top Posts in {selectedSubreddit}</h3>
                    {feed.feed.map(post => {
                    const title = post.title;
                    const subreddit = post.subreddit_name_prefixed;
                    const author = post.author;
                    const thumbnail = post.thumbnail;
                    const score = post.score;
                    return <Post 
                        title={title}
                        subreddit={subreddit}
                        author={author}
                        thumbnail={thumbnail}
                        score={score}
                        />})}
                </ul>
            </div>
        )}
}
