import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"

function navbar() {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <h1>James.Dev</h1>
            </div>
            <div className="nav-right">
                <a href='#home' rel='home'>Home</a>
                <a href='#home' rel='home'>About</a>
                <a href='#home' rel='home'>Projects</a>
                <a href='#home' rel='home'>Contact</a>
            </div>
        </div>
    )
}

export default navbar