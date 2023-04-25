import React from "react";
import './Subreddit.css'

export const Subreddit = (props) => {
    return (
        <li>
            <button>
                <img src={props.img} alt=""></img>
                <span>{props.name}</span>
            </button>
        </li>
    )
}