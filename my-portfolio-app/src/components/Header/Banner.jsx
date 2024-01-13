import { useTranslation } from 'react-i18next';
import { BannerProvider, useBanner } from './BannerContext.jsx';
import PropTypes from 'prop-types';

import './banner.scss';


const Banner = () => {
  const { t } = useTranslation();
  const { isBannerVisible, toggleBanner } = useBanner();



  return (
    <div>
      <header className={`header-container ${isBannerVisible ? 'visible' : 'hidden'}`}>
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
          <div className="content-box">
            {t('banner.name')}
          </div>
        </div>
      </header>
      <button onClick={toggleBanner} className={`toggle-banner-button ${isBannerVisible ? '' : 'up'}`}></button>
    </div>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Banner;
