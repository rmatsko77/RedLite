import React, { useState, useRef, useEffect } from "react";
import { fetchComments, setSelectedSubreddit } from "../../Features/FeedSlice";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../Comments/Comment";
import { CommentsLoading } from "../Comments/CommentsLoading.js";
import './Post.css'
import { CommentsEmpty } from "../Comments/CommentsEmpty";

export const Post = (props) => {
    const [isActive, setIsActive] = useState('inactive')
    const [showComments, setShowComments] = useState('hidden')
    const dispatch = useDispatch();
    const feed = useSelector((state) => state.feed)
    const { commentsIsLoading } = feed
    const ref = useRef(null);
    let title = props.title
    let thumbnail = ''
    let score = ''
    const permalink = props.permalink
    const media = props.mediaType
    let commentList = '';
    
    const handleOffClick = (event) => {
        if (ref.current.contains(event.target)) {
          return
        }
        setIsActive('inactive');
        setShowComments('hidden')
    }
    
    useEffect(() => {
        document.addEventListener('click', handleOffClick)
    
        return () => {
          document.removeEventListener('click', handleOffClick)
        }
      }, [])

    const toggleComments = (event) => {
        event.cancelBubble = true;
        if(event.stopPropagation) event.stopPropagation();

        if(showComments === 'hidden') {
            dispatch(fetchComments(permalink))
            setShowComments('show')
        }
        if(showComments === 'show')
            setShowComments('hidden')

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
        thumbnail = '/nsfw-icon.png'
    }

    const handleClick = () => {

        if (isActive === 'inactive') {
            setIsActive('active')
            document.getElementById(title).scrollIntoView(false)
        } if(isActive === 'active') {
            setIsActive('inactive')
        } if(showComments === 'show') {
            setShowComments('hidden')
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
            return (
                <video className="reddit-video" controls>
                    <source src={props.media.reddit_video.fallback_url} type="video/mp4" ></source>
                </video>
            )
        }
        if(props.domain.includes('youtube') || props.domain.includes('youtu.be')) {
            const url = props.fullImage
            const baseUrl = 'https://www.youtube.com/embed/';
            let realUrl = ''

            if(url[13] === '.') {
                const urlSuffix = url.slice(17, url.len)
                realUrl = baseUrl.concat(urlSuffix)

                return (
                        <iframe title={props.name} src={realUrl} className="youtube-video" width="640" height="385" controls>
                        </iframe>
                )
            }
            if(url[17] === 'b') {
                const urlSuffix = url.slice(32, url.len)
                realUrl = baseUrl.concat(urlSuffix)

                return (
                        <iframe title={props.name} src={realUrl} className="youtube-video" width="640" height="385" controls>
                        </iframe>
                )
            }
            if(url[8] === 'm') {
                const urlSuffix = url.slice(30, url.len)
                realUrl = baseUrl.concat(urlSuffix)

                return (
                        <iframe title={props.name} src={realUrl} className="youtube-video" width="640" height="385" controls>
                        </iframe>

                )
            }


            
        }
        if(media === 'link') {
            return (
                <div className="link">
                    <p>See full article here</p>
                    <p>&darr;</p>
                    <a href={props.fullImage} target="_blank" rel="noreferrer"><img src={thumbnail} alt=""></img></a>
                </div>
            )
        }
        if(props.galleryData) {
            return (
                <div className="gallery">
                    <p>View photo gallery here</p>
                    <p>&darr;</p>
                    <a href={props.fullImage} target="_blank" rel="noreferrer"><img src={thumbnail} alt=""></img></a>
                </div>
            )
        }
        if(props.text) {
            return (
                <p className="text">{props.text}</p>
            )
        }
        }

        if(feed.comments) {
            commentList = feed.comments.slice(0,15).map(comments => {
                const body = comments.body
                const author = comments.author
                const ups = comments.ups
              
                return (
                    <Comment
                        body={body}
                        author={author}
                        ups={ups}
                    />
                )
            })
        } if(!feed.comments.length) {
            commentList = <CommentsEmpty />
        }

    if(commentsIsLoading) {
        return (
            <div className={isActive} id={title}>
                    <li className="post" >
                        <div className="left-side">
                            <img src={thumbnail} alt=""></img>
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
                        <button className="comments-button" onClick={toggleComments}><img className="comment-icon" src="/comments-icon.png" alt=""></img>Comments</button>
                        <div className="score">
                            <img src="/arrow-icon.png" alt=""></img>
                            <p>{score}</p>
                        </div>
                    </li>
                <div className={showComments} id="comments">
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                    <CommentsLoading />
                </div>
            </div>
        )
    }

    else {
    return (
        <div className={isActive} id={title} onClick={handleClick} ref={ref}>
                <li className="post" id={isActive}>
                    <div className="left-side">
                        <img src={thumbnail} alt=""></img>
                    </div>
                    <div className="right-side">
                        <div className="top">
                            <p className="subreddit" onClick={() => dispatch(setSelectedSubreddit(props.subreddit))}>{props.subreddit}</p>  
                            <p className="author">Posted by: u/{props.author}</p>                 
                        </div>
                        <div className="bottom">
                            <h3 className="title">{title}</h3>
                        </div>
                        <div className="media">
                            {checkMediaType()}
                        </div>
                    </div>
                    <button className="comments-button" onClick={toggleComments}><img className="comment-icon" src="/comments-icon.png" alt=""></img>Comments</button>
                    <div className="score">
                        <img src="/top-icon.png" alt=""></img>
                        <p>{score}</p>
                    </div>
                </li>
            <div className={showComments} id="comments">
                <ul>
                    {commentList}
                </ul>
            </div>
        </div>
    )
}}