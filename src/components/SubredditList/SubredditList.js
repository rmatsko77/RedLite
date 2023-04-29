import React, { useEffect } from "react";
import {  selectSubreddits } from "../../Features/SubredditSlice";
import { useSelector, useDispatch } from "react-redux";
import { Subreddit } from "../Subreddit/Subreddit";
import './SubredditList.css'
import { fetchSubreddits } from "../../Features/SubredditSlice";

export function SubredditList() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const subredditsList = subreddits.map(sub => {
        const name = sub.display_name_prefixed;
        const icon = sub.icon_img;
        const id = sub.id;
        return <Subreddit
            name={name}
            icon={icon}
            id={id}
        />
    })

    useEffect(() => {
     dispatch(fetchSubreddits())
    }, [])

    return (
        <ul className="subredditList">
            {subredditsList}
        </ul>
    )
}