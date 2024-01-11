/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import '../App.css'

export default function Nav({ toggleDarkMode, darkMode }) {
    
    return (
        <div className= {`nav-items ${darkMode ? 'dark-mode' : ''}`}>
            <h1>devfinder</h1> 
            <img src={`./src/assets/${darkMode ? 'light.png' : 'dark.png'}`}
            alt="Toggle Dark Mode"
            onClick={toggleDarkMode}/>
            
        </div>
    )

}