import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import './banner.scss';


const Banner = () => {
  const { t } = useTranslation();
  const [isBannerVisible, setBannerVisible] = useState(true);

  const toggleBanner = () => {
    setBannerVisible(!isBannerVisible);
  };

  const body = document.body 
  useEffect(() => {
    const scrollAmount = 30;
    if (body) {
      body.style.transition = 'transform 0.5s';
body.style.transform = isBannerVisible ? 'translateY(0)' : `translateY(-${scrollAmount}%)`
    }
  },[isBannerVisible])



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
      <button
        onClick={toggleBanner}
        className={`toggle-banner-button ${isBannerVisible ? '' : 'up'}`}
      >
      </button>
    </div>
  );
};

export default Banner;
