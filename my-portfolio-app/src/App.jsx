// App.jsx
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
