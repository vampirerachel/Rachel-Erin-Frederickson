// Navigation.jsx

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navigation.scss';

const Navigation = ({ toggleMenu }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen(!isMenuOpen);
    toggleMenu();
  };

  return (
    <div className={`navigation-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenuHandler}>
        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="has-submenu">
            <a href="#">Info</a>
            <ul className="submenu">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
