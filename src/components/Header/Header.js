import './Header.css';
import React from 'react';
import { selectSearchTerm, setSearchTerm, setSelectedSubreddit } from '../../Features/FeedSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../Store/store';

export function Header() {

    const state = store.getState();
    const dispatch = useDispatch();
    const term = useSelector(selectSearchTerm)

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setSelectedSubreddit('r/'+term))
        dispatch(setSearchTerm(''))
    }

    return (
        <div className="header">
            <div className="logos">
                <img
                    src="/favicon.png"
                    alt="RedLite logo"
                    id="logo">
                </img>
                <img
                    src="/text-icon.png"
                    alt="RedLite logo"
                    id="text-logo">
                </img>
            </div>
            <form onSubmit={handleSubmit}>
                    <img src='/search-icon.png' id='search-icon'></img>
                    <input
                    onChange={handleChange}
                    placeholder='Search Subreddits'
                    value={term}
                    
                    >
                    </input>
                </form>
        </div>
    )
}