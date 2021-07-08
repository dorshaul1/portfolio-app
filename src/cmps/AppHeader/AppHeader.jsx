import './AppHeader.scss'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const AppHeader = () => {
    return (
        <div className="app-header flex space-between align-center">
            <Link to="/"> <div className="logo flex  space-between align-center">
                <h1></h1>
            </div></Link>
            <ul className="flex clean-list">
                <NavLink exact activeClassName="active" to='/'> <li>Home <div className="dot"></div></li></NavLink>
                <NavLink exact activeClassName="active" to='/portfolio'><li>Portfolio <div className="dot"></div></li></NavLink>
            </ul>
        </div>
    );
}
