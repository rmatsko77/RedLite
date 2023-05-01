import React from "react";
import './FeedError.css';

export const FeedError = () => {
    return (
        <div className="feed-error">
            <img src="/error-icon.png" ></img>
            <h4>Sorry... that subreddit could not be found</h4>
        </div>
    )
}