// App.jsx

import Navigation from './components/Header/Menu/Navigation';
import Banner from './components/Header/Banner'
import './App.css';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <div className="App">
      <Banner />
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
