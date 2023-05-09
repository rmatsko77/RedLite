import React from "react";
import './Comment.css'
import { selectComments } from "../../Features/FeedSlice";
import { useSelector } from "react-redux";

export function Comment(props) {
    let score = ''
    const comments = useSelector(selectComments)

    if(props.ups > 9999) {
        const string = props.ups.toString();
        const slice =  string.slice(0,2) + '.' + string.slice(2)
        score = slice.slice(0,4) + 'k'

    } if(props.ups < 10000) {
        const string = props.ups.toString();
        const slice = string.slice(0,1) + '.' + string.slice(1);
        score = slice.slice(0,3) + 'k'

    } if(props.ups < 1000) {
        score = props.ups
    }

    if(comments.length) {

        return (
            <div className="comment">
                <div className="top">
                    <p className="author">u/{props.author}</p>
                    <div className="score">
                        <img src='/top-icon.png' alt=""></img>
                        <p className="props">{score}</p>
                    </div>
                </div>
                <p className="body">{props.body}</p>
            </div>
        )
    }
} 
