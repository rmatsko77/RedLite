import React from "react";
import './Comment.css'

export function CommentsLoading(props) {
    let score = ''

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

    return (
        <div className="comment">
            <div class="loader"><span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>
        </div>
    )
}