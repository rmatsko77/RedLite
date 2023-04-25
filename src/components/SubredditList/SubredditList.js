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
    }, [dispatch])
    
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
    console.log(list)
    return (
        <div className="subredditList">
            <h2>Popular Subreddits</h2>
            <ul>
                {list}
                <p>Working</p>
            </ul>
        </div>
    )
}