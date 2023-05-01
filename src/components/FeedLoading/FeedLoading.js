import React from "react";
import './FeedLoading.css'

export function FeedLoading() {

    return (
        <li className="post">
            <div className="score">
                <img src="/arrow-icon.png"></img>
                <p></p>
            </div>
            <div className="left-side">
                <img src=''></img>
            </div>
            <div className="right-side">
                <div className="top">
                    <h3 className="title">Loading...</h3>
                </div>
                <div className="bottom">
                <p className="subreddit"></p>  
                    <p className="author" target='_blank'></p>                 
                </div>
            </div>
        </li>
)
}