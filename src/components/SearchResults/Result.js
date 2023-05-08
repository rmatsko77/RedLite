import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedSubreddit, setSearchTerm } from "../../Features/FeedSlice";

export function Result(props) {

    const dispatch = useDispatch();

    const handleClickList = () => {
        dispatch(setSelectedSubreddit(props.name))
        dispatch(setSearchTerm(''))
    }

    return (
        <li className="result" onMouseDown={handleClickList}>
            <img src={props.icon}></img>
            <h4>{props.name}</h4>
        </li>
    )
}