// Navigation.jsx

import Burger from "./Burger";
import "../Menu/navigation.scss";

/*const Navigation = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`navigation-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
      <Burger toggleMenu={toggleMenu} />
      <div className="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
