import React from "react";
import './SubredditList.css'

export function SubredditList() {

    const fakeSubreddits = [
        {
            name: 'anti work',
            id: 1
        
        },
        {
            name: 'news',
            id: 2
        },
        {
            name: 'dark souls',
            id: 3
        },
        {
            name: 'us politics',
            id: 4
        },
        {
            name: 'halo',
            id: 6
        },
        {
            name: 'Call of Duty',
            id: 7
        },
        {
            name: 'The Office',
            id: 8
        },
        {
            name: 'Game of Thrones',
            id: 9
        },
        {
            name: 'White People Twitter',
            id: 10
        },
        {
            name: 'WebDev',
            id: 11
        },
        {
            name: 'Socialism',
            id: 12
        },
        
    ]

    return (
        <div className="subredditList">
            <h2>Popular Subreddits</h2>
            <ul>
                {fakeSubreddits.map((subreddit) => (
                    <li><button>{subreddit.name}</button></li>
                )

            )}
            </ul>
        </div>
    )
}