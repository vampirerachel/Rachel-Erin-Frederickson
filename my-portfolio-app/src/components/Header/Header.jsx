import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../Header/header.scss'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

const toggleMenu=()=> {
    setMenuOpen( !isMenuOpen);
}
    
  return (
      <header className="header-container">
      <div className="layered-box">
        <div className="base-layer"></div>
        <div className="top-layer"></div>
        <div className="third-layer"></div>
        <div className="fourth-layer"></div>
        <div className="fifth-layer"></div>
        <div className="sixth-layer"></div>
        <div className="seventh-layer"></div>
        <div className="eighth-layer"></div>
        <div className="ninth-layer"></div>
        <div className="tenth-layer"></div>
        <div className="content-box">Rachel Erin Frederickson</div>
          </div>
          <div className='menu-icon' onClick={toggleMenu}> <FontAwesomeIcon icon={faBars} /></div>
          <div className={`layered-box ${isMenuOpen ? 'menu-open' : ''}`}></div>
    </header>
  );
}

export default Header;