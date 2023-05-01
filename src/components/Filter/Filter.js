import React from "react";
import './Filter.css'
import { useDispatch } from "react-redux";
import { setFilter } from "../../Features/FeedSlice";


export const Filter = () => {

    const dispatch = useDispatch()

    const handleClickTop = () => {
        dispatch(setFilter('top'))
        document.getElementById('top').classList.add('active')
        document.getElementById('best').classList.remove('active')
        document.getElementById('new').classList.remove('active')
    }

    const handleClickBest = () => {
        dispatch(setFilter('best'))
        document.getElementById('best').classList.add('active')
        document.getElementById('top').classList.remove('active')
        document.getElementById('new').classList.remove('active')
    }

    const handleClickNew = () => {
        dispatch(setFilter('new'))
        document.getElementById('new').classList.add('active')
        document.getElementById('best').classList.remove('active')
        document.getElementById('top').classList.remove('active')
    }

    return (
        <div className="filter">
            <div className="filter-text">
                <p>Filter by:</p>
            </div>
            <div className="containter">
                <div className="card" id='top' onClick={handleClickTop}>
                    <img src="/top-icon.png"></img>
                    <p>Top</p>
                </div>
                <div className="card" id='best' onClick={handleClickBest}>
                    <img src="/best-icon.png"></img>
                    <p>Best</p>
                </div>
                <div className="card" id='new' onClick={handleClickNew}>
                    <img src="/new-icon.png"></img>
                    <p>New</p>
                </div>
            </div>
        </div>
    )
}