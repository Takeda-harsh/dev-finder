/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { FaSun, FaMoon } from 'react-icons/fa';
import '../App.css'

export default function Nav({ toggleDarkMode, darkMode }) {
    
    return (
        <div className= {`nav-items ${darkMode ? 'dark-mode' : ''}`}>
            <h1>devfinder</h1> 
            <div className="toggle">
            {darkMode ? (<FaSun onClick={toggleDarkMode}/>) :  (<FaMoon onClick={toggleDarkMode}/>
            )}
             <h4 onClick={toggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</h4>
                </div>
            
            
        </div>
    )

}