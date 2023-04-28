import React from "react";
import './Subreddit.css';
import { updateCurrentSubreddit } from "../../Features/CurrentSubredditSlice";
import { useDispatch } from "react-redux";

export const Subreddit = (props) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateCurrentSubreddit(props.name));
    };

    return (
        <li>
            <button onClick={handleClick}>
                <img src={props.img} alt=""></img>
                <span>{props.name}</span>
            </button>
        </li>
    )
}