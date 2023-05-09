import './Header.css';
import React, { useEffect } from 'react';
import { selectSearchTerm, setSearchTerm, setSelectedSubreddit } from '../../Features/FeedSlice';
import { fetchSearch } from '../../Features/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../Store/store';
import { SearchResults } from '../SearchResults/SearchResults';

export function Header(props) {

    const state = store.getState();
    const dispatch = useDispatch();
    const term = useSelector(selectSearchTerm)

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    useEffect(() =>{
        dispatch(fetchSearch(state.feed.searchTerm))
    }, [state.feed.searchTerm])

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
            <form onSubmit={handleSubmit} >
                <img src='/search-icon.png' id='search-icon' alt=''></img>
                <input
                className='search-bar'
                onChange={handleChange}
                placeholder='Search Subreddits'
                value={term}                    
                >
                </input>
                <div className='search-box'>
                    <SearchResults />
                </div>
            </form>
            <div className='toggle-bar'>
                <label class="toggle">
                    <input type="checkbox"  onClick={props.toggleTheme}></input>
                    <span class="slider"></span>
                    <span class="labels" data-on='Dark' data-off="Light"></span>
                </label>
            </div>
        </div>
    )
}