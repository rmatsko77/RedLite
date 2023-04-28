import React from "react";
import './Post.css'

export const Post = (props) => {
    const userUrl = 'https://www.reddit.com/user/' + props.author;

    return (
            <li className="post">
                <div className="top">
                    <p className="subreddit">{props.subreddit}</p>
                    <a href={userUrl} className="author" target='_blank'>u/{props.author}</a>
                </div>
                <h3 className="title">{props.title}</h3>
            </li>
    )
}