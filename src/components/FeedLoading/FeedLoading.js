import React from "react";
import './FeedLoading.css'

export function FeedLoading() {

    return (
        <li className="post">
            <div className="score">
            </div>
            <div className="left-side">
                <img src=''></img>
            </div>
            <div className="right-side">
                <div className="top">
                    <div class="loader"><span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>
                </div>
                <div className="bottom">
                    <p className="subreddit"></p>  
                    <p className="author" target='_blank'></p>                 
                </div>
            </div>
        </li>
)
}