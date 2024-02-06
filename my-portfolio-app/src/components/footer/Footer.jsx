// Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BannerContext } from '../header/BannerContext';
import { useContext } from 'react';
import './footer.scss';

const Footer = () => {
  const {bannerColors } = useContext(BannerContext); 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
    <footer className="footer">
      <div className="footer-layered-box">
          <div className="base-layer" style={{ backgroundColor: bannerColors.base }}></div>
          <div className="second-layer" style={{ backgroundColor: bannerColors.second }}></div>
          <div className="third-layer" style={{ backgroundColor: bannerColors.third }}></div>
          <div className="fourth-layer" style={{ backgroundColor: bannerColors.fourth }}></div>
          <div className="fifth-layer" style={{ backgroundColor: bannerColors.fifth }}></div>
          <div className="sixth-layer" style={{ backgroundColor: bannerColors.sixth }}></div>
          <div className="seventh-layer" style={{ backgroundColor: bannerColors.seventh }}></div>
          <div className="eighth-layer" style={{ backgroundColor: bannerColors.eighth }}></div>
          <div className="ninth-layer" style={{ backgroundColor: bannerColors.ninth }}></div>
          <div className="tenth-layer" style={{ backgroundColor: bannerColors.tenth }}></div>
        <div className="footer-content-box">
          <div className="linkedin-link">
            <a href="YOUR_LINKEDIN_PROFILE_URL" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
            <p>Thanks for visiting</p>
                  <button className="scroll-top-button" onClick={scrollToTop} style={{ backgroundColor: bannerColors.navBackground, color: bannerColors.navText }}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
        </div>
        </div>
      </footer>
      </div>
  );
};

export default Footer;
