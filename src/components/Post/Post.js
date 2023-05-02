import React, { useState } from "react";
import './Post.css'

export const Post = (props) => {
    const [isActive, setIsActive] = useState('inactive')
    let title = ''
    let thumbnail = ''
    let score = ''
    const media = props.mediaType

    if(props.title.length > 90) {
        title = props.title.slice(0,90) + '...'
    } else {
        title = props.title
    }

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

    const handleClick = () => {
        if (isActive === 'inactive') {
            setIsActive('active')
        } else {
            setIsActive('inactive')
        }
      
    }

    const checkMediaType = () => {
        if(media === 'image') {
            return (
                <img src={props.fullImage} alt=''></img>
            )
        } 
        if(props.domain === 'i.imgur.com') {
            const length = props.gif.length
            const slice = props.gif.slice(0, (length - 4))
            const mp4 = slice + 'mp4'

            return (
                <video className="gif" controls>
                    <source src={mp4}></source>
                </video>
            )
        }
        if(media === 'hosted:video') {
            const video = props.fullImage + '/DASH_480.mp4?source=fallback'
            return (
                <video className="reddit-video" controls>
                    <source src={video} type="video/mp4" ></source>
                </video>
            )
        }
        if(props.domain.includes('youtube') || props.domain.includes('youtu.be')) {
            const url = props.fullImage
            let baseUrl = 'https://www.youtube.com/embed/';
            let realUrl = ''

            if(url[13] === '.') {
                const urlSuffix = url.slice(17, url.len)
                const realUrl = baseUrl.concat(urlSuffix)

                return (
                        <iframe src={realUrl} className="youtube-video" width="640" height="385" controls>
                        </iframe>
                )
            }
            if(url[17] === 'b') {
                const urlSuffix = url.slice(32, url.len)
                const realUrl = baseUrl.concat(urlSuffix)

                return (
                        <iframe src={realUrl} className="youtube-video" width="640" height="385" controls>
                        </iframe>
                )
            }
            if(url[8] === 'm') {
                const urlSuffix = url.slice(30, url.len)
                const realUrl = baseUrl.concat(urlSuffix)
                console.log(realUrl)

                return (
                        <iframe src={realUrl} className="youtube-video" width="640" height="385" controls>
                        </iframe>

                )
            }


            
        }
        if(media === 'link') {
            return (
                <div className="link">
                    <p>See full article here</p>
                    <p>&darr;</p>
                    <a href={props.fullImage} target="_blank"><img src={thumbnail}></img></a>
                </div>
            )
        }
        if(props.galleryData) {
            return (
                <div className="gallery">
                    <p>View photo gallery here</p>
                    <p>&darr;</p>
                    <a href={props.fullImage} target="_blank"><img src={thumbnail}></img></a>
                </div>
            )
        }
        if(props.text) {
            return (
                <p className="text">{props.text}</p>
            )
        }

        }
  

    return (
        <div className={isActive} id={title} onClick={handleClick}>
            <li className="post">
                <div className="left-side">
                    <img src={thumbnail}></img>
                </div>
                <div className="right-side">
                    <div className="top">
                        <p className="subreddit">{props.subreddit}</p>  
                        <p className="author" target='_blank'>Posted by: u/{props.author}</p>                 
                    </div>
                    <div className="bottom">
                        <h3 className="title">{title}</h3>
                    </div>
                    
                    <div className="media">
                        {checkMediaType()}
                    </div>
                </div>
                <div className="score">
                    <img src="/arrow-icon.png"></img>
                    <p>{score}</p>
                </div>
            </li>
        </div>
    )
}