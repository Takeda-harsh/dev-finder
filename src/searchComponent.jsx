// SearchComponent.jsx
import React, { useState } from 'react';
import Nav from './components/nav';
import Search from './components/searchbar';
import Profile from './components/profile';
import './App.css';

export default function SearchComponent({ darkMode, toggleDarkMode }) {
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    console.log('Search button clicked with username:', username);
  };

  return (
    <>
      <div className={`s-component ${darkMode ? 'dark-mode' : ''}`}>
        <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Search setUsername={setUsername} onSearch={handleSearch} darkMode={darkMode} />
        <Profile username={username} darkMode={darkMode} />
      </div>
    </>
  );
}
