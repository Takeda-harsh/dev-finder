/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Search ({ setUsername, onSearch, darkMode }) {

    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setUsername(inputValue);
    onSearch();
  };

    return (
        <>
            <div className="search-box">
                <img src="./src/assets/search.png"/>
                <input type="text" placeholder="Search GitHub username…"
                value={inputValue}
                onChange={handleInputChange}
                />
                <button onClick={handleSearchClick} >Search</button>
            </div>
        </>
    )
}