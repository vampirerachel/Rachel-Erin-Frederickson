// Navigation.jsx
import Toggle from '../buttons/toggle';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { BannerContext } from './BannerContext';


import './navigation.scss';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const { updateBannerColors } = useContext(BannerContext);

  
  const toggleMenuHandler = () => {
    setMenuOpen(!isMenuOpen);
    setSubMenuOpen(false); // Close submenu when toggling the main menu
  };

  const toggleLanguage = () => {
    const newLanguage = activeLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setActiveLanguage(newLanguage);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const openSubMenu = () => {
    setSubMenuOpen(true);
  };
 

  const handleClick = () => {
    const newColors = {
      base: getRandomColor(),
      second: getRandomColor(),
      third: getRandomColor(),
      fourth: getRandomColor(),
      fifth: getRandomColor(),
      sixth: getRandomColor(),
      seventh: getRandomLightColor(),
      eighth: getRandomLightColor(),
      ninth: getRandomLightColor(),
      tenth: getRandomLightColor(),
      hover: getRandomColor(),
      navBackground: getRandomColor(),
      navText: getRandomColor(),
    };

    updateBannerColors(newColors);
  };
const getRandomLightColor = () => {
    const minComponentValue = 150; 

    const randomComponent = () => Math.floor(Math.random() * (255 - minComponentValue) + minComponentValue);

    const red = randomComponent().toString(16);
    const green = randomComponent().toString(16);
    const blue = randomComponent().toString(16);

    return `#${red}${green}${blue}`;
};

console.log(getRandomLightColor());
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <div className={`navigation-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="menu-icon-container" onClick={toggleMenuHandler}>
        <div className="menu-icon">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">{t('nav.home')}</a></li>
          <li><a href="#">{t('nav.about')}</a></li>
          <li><a href="#">{t('nav.contact')}</a></li>
          <li className={`has-submenu ${isSubMenuOpen ? 'open' : ''}`} onClick={toggleSubMenu}>
            <a href="#" onClick={openSubMenu}>
              {t('nav.portfolio')}
            </a>
            <ul className="submenu">
              <li>
                <a href="#">{t('nav.option1')}</a>
              </li>
              <li>
                <a href="/WebDev">{t('nav.option2')}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="lang">
        <Toggle toggleLanguage={toggleLanguage} langLabel={activeLanguage === 'en' ? 'Español' : 'English'} />
      </div>
      <div>
      <button type="button" className="change-color" onClick={handleClick}>
        Change color
      </button>
      </div>
    </div>
  );
};

export default Navigation;
