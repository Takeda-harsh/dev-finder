/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

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
                <FaSearch/>
                <input type="text" placeholder="Search GitHub username…"
                value={inputValue}
                onChange={handleInputChange}
                />
                <button onClick={handleSearchClick} >Search</button>
            </div>
        </>
    )
}