import './Header.css';
import { SearchTerm } from '../SearchTerm/SearchTerm';
import React from 'react';

export function Header() {


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
            <SearchTerm />
        </div>
    )
}