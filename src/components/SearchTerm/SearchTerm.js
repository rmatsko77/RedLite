import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, updateSearchTerm } from "../../Features/SearchTermSlice";
import store from "../../Store/store";
import { updateCurrentSubreddit } from "../../Features/CurrentSubredditSlice";

export function SearchTerm() {

    const dispatch = useDispatch();
    const state = store.getState()
    const term = useSelector(selectSearchTerm);

    const handleChange = (event) => {
       dispatch(updateSearchTerm(event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateCurrentSubreddit('r/' + state.searchTerm.searchTerm))
        console.log(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label><img 
                    src="/search-icon.png"
                    id='search-icon'
                    alt=''
                    >
                    </img></label>
            <input
                type="text"
                placeholder="Search Subreddits"
                onChange={handleChange}
                value={state.searchTerm.searchTerm}
                >
            </input>
          </form>
    )

}