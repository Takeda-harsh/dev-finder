import { useState } from 'react';
import './App.css'
import SearchComponent from './searchComponent'

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
    <div className= {`main ${darkMode ? 'dark-mode' : ''}`}>
      <SearchComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
      
    </>
  )
}

export default App
