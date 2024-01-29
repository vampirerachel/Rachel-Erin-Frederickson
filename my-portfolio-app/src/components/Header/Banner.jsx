// Banner.jsx
import { useTranslation } from 'react-i18next';
import { BannerContext } from './BannerContext.jsx';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

const Banner = () => {
  const { t } = useTranslation();
  
   const { isBannerVisible, toggleBanner,bannerColors } = useContext(BannerContext);



  return (
    <div>
      <header className={`header-container ${isBannerVisible ? 'visible' : 'hidden'}`}>
        <div className="layered-box">
          <div className="base-layer" style={{ backgroundColor: bannerColors.base }}></div>
          <div className="top-layer" style={{ backgroundColor: bannerColors.top }}></div>
          <div className="third-layer" style={{ backgroundColor: bannerColors.third }}></div>
          <div className="fourth-layer" style={{ backgroundColor: bannerColors.fourth }}></div>
          <div className="fifth-layer" style={{ backgroundColor: bannerColors.fifth }}></div>
          <div className="sixth-layer" style={{ backgroundColor: bannerColors.sixth }}></div>
          <div className="seventh-layer" style={{ backgroundColor: bannerColors.seventh }}></div>
          <div className="eighth-layer" style={{ backgroundColor: bannerColors.eighth }}></div>
          <div className="ninth-layer" style={{ backgroundColor: bannerColors.ninth }}></div>
          <div className="tenth-layer" style={{ backgroundColor: bannerColors.tenth }}></div>
          <div className="content-box">
            {t('banner.name')}
          </div>
        </div>
      </header>
      <button onClick={toggleBanner} className={`toggle-banner-button ${isBannerVisible ? '' : 'up'}`}></button>
    </div>
  );
};

Banner.propTypes = {
  bannerColors: PropTypes.object.isRequired,
};

export default Banner;
