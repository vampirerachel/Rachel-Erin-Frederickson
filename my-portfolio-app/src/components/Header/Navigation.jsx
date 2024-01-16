// Navigation.jsx
import Toggle from '../buttons/toggle';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


import './navigation.scss';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

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

  return (
    <div className={`navigation-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="menu-icon-container" onClick={toggleMenuHandler}>
        <div className="menu-icon">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">{t('nav.home')}</a></li>
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
                <a href="/webdev">{t('nav.option2')}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="lang">
        <Toggle toggleLanguage={toggleLanguage} langLabel={activeLanguage === 'en' ? 'Español' : 'English'} />
      </div>
    </div>
  );
};

export default Navigation;
