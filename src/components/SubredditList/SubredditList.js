import React, { useEffect } from "react";
import {  selectSubreddits } from "../../Features/SubredditSlice";
import { useSelector, useDispatch } from "react-redux";
import { Subreddit } from "../Subreddit/Subreddit";
import './SubredditList.css'
import store from "../../Store/store";
import { fetchSubreddits } from "../../Features/SubredditSlice";

export function SubredditList() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const state = store.getState();
    const subredditsList = subreddits.slice(0,13).map(sub => {
        const name = sub.display_name_prefixed;
        const icon = sub.icon_img;
        const id = sub.id;
        return (
            <Subreddit
                name={name}
                icon={icon}
                id={id}
            />
        )
    })

    useEffect(() => {
     dispatch(fetchSubreddits())
    }, [])

    if(state.subreddits.isLoading) {
        return (
            <div className="subredditList">
                <ul>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                </ul>
        </div>
        )
    }
    if (!state.subreddits.isLoading) {
        return (
            <div className="subredditList">
                <ul>
                    {subredditsList}
                </ul>
            </div>
        )
    }
}