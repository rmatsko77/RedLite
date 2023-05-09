import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed } from "../../Features/FeedSlice";
import { Post } from '../Post/Post.js'
import { FeedLoading } from "../FeedLoading/FeedLoading";
import { FeedError } from "../FeedError/FeedError";
import './Feed.css'

export function Feed() {

    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feed);
    const { isLoading, error, selectedSubreddit, filter } = feed;

    useEffect(() => {
        dispatch(fetchFeed({selectedSubreddit, filter}))
    }, [selectedSubreddit, filter])

    if(isLoading) {
        return (
            <div className="feed">
                <ul>
                    <h3 className="loading-title">Loading</h3>
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
                    <h3 className="feed-title">{filter} posts in {selectedSubreddit}</h3>
                    {feed.feed.map(post => {
                    const title = post.title;
                    const subreddit = post.subreddit_name_prefixed;
                    const author = post.author;
                    const thumbnail = post.thumbnail;
                    const score = post.score;
                    const fullImage = post.url
                    const gif = post.url_overridden_by_dest
                    const mediaType = post.post_hint
                    const domain = post.domain
                    const galleryData = post.gallery_data
                    const text = post.selftext
                    const permalink = post.permalink
                    const id = post.id
                    const media = post.media
                    return <Post 
                        title={title}
                        subreddit={subreddit}
                        author={author}
                        thumbnail={thumbnail}
                        score={score}
                        fullImage={fullImage}
                        gif={gif}
                        mediaType={mediaType}
                        domain={domain}
                        galleryData={galleryData}
                        text={text}
                        permalink={permalink}
                        id={id}
                        media={media}
                        />})}
                </ul>
            </div>
        )}
}
