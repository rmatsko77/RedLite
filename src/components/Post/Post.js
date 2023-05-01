import React from "react";
import './Post.css'

export const Post = (props) => {
    const title = props.title.slice(0,60) + '...'
    let thumbnail = ''
    let score = ''

    if(props.score > 9999) {
        const string = props.score.toString();
        const slice =  string.slice(0,2) + '.' + string.slice(2)
        score = slice.slice(0,4) + 'k'

    } if(props.score < 10000) {
        const string = props.score.toString();
        const slice = string.slice(0,1) + '.' + string.slice(1);
        score = slice.slice(0,3) + 'k'

    } if(props.score < 1000) {
        score = props.score
    }
    

    if(props.thumbnail) {
        thumbnail = props.thumbnail
    } if (props.thumbnail.includes('external') || props.thumbnail.includes('self') || props.thumbnail.includes('default') || !props.thumbnail){
        thumbnail = '/post-icon.png'
    } if (props.thumbnail.includes('nsfw')) {
        thumbnail = 'nsfw-icon.png'
    }
  

    return (
            <li className="post">
                <div className="score">
                    <img src="/arrow-icon.png"></img>
                    <p>{score}</p>
                </div>
                <div className="left-side">
                    <img src={thumbnail}></img>
                </div>
                <div className="right-side">
                    <div className="top">
                        <h3 className="title">{title}</h3>
                    </div>
                    <div className="bottom">
                    <p className="subreddit">{props.subreddit}</p>  
                        <p className="author" target='_blank'>u/{props.author}</p>                 
                    </div>
                </div>
            </li>
    )
}