// Navigation.jsx
import Toggle from '../buttons/toggle';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { useBanner } from './BannerContext';

import './navigation.scss';

const Navigation = () => {

const { isBannerVisible } = useBanner();
 useEffect(() => {
    document.body.style.marginTop = isBannerVisible ? '30vh' : '0';
    return () => {
      document.body.style.marginTop = '0'; // Reset margin on component unmount
    };
 }, [isBannerVisible]);
  
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('en');
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);


  const toggleMenuHandler = () => {
    setMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
   <div className={`navigation-wrapper ${isMenuOpen ? 'menu-open' : ''} ${isBannerVisible ? 'banner-visible' : 'banner-invisible'}`} >
      <div className="menu-icon" onClick={toggleMenuHandler}>
        {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">{t('nav.home')}</a></li>
          <li><a href="#">{t('nav.about')}</a></li>
          <li><a href="#">{t('nav.contact')}</a></li>
          <li className={`has-submenu ${isSubMenuOpen ? 'open' : ''}`} onClick={toggleSubMenu}>
            <a href="#">{t('nav.portfolio')}</a>
            <ul className="submenu">
              <li><a href="#">{t('nav.option1')}</a></li>
              <li><a href="#">{t('nav.option2')}</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className={`lang ${isBannerVisible ? 'banner-visible' : 'banner-invisible'}`}>
        <Toggle className='en' toggleLanguage={() => changeLanguage('en')} langLabel='English' isActive={activeLanguage === 'en'}></Toggle>
        <Toggle classname='es' toggleLanguage={() => changeLanguage('es')} langLabel='Español' isActive={activeLanguage === 'es'}></Toggle>
      </div>
    </div>
  );
};

export default Navigation;
