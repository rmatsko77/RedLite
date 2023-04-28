import React, { useEffect } from "react";
import { selectSubreddits, fetchSubreddits } from "../../Features/SubredditSlice";
import { useSelector, useDispatch } from "react-redux";
import { Subreddit } from "../Subreddit/Subreddit";
import './SubredditList.css'

export function SubredditList() {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    let list = null;

    useEffect(() => {
        dispatch(fetchSubreddits())
    },[])
    
    if (!subreddits.length){
        return;
    } else {
        list = subreddits.map(subreddit => {
            return <Subreddit 
                key={subreddit.id}
                img={subreddit.icon_img}
                name={subreddit.display_name_prefixed}
            />
        })
    }

    return (
        <div className="subredditList">
            <div className="subredditList-title">
                <h2>Popular Subreddits</h2>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    )
}