
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BannerContext } from '../header/BannerContext';
import { useContext } from 'react';
import './box.scss';

const Box = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {bannerColors } = useContext(BannerContext); 
  const handleBox1Click = () => {
    navigate('/webdev');
  };

  const handleBox2Click = () => {
    navigate.push('/Gallery');
  };

  return (
    <div className="box-container">

      <div className="box-layered-box"  onClick={handleBox1Click}>
<div className="box-base-layer" style={{ backgroundColor: bannerColors.base }}></div>
        <div className="box-top-layer" style={{ backgroundColor: bannerColors.top }}></div>
        <div className="box-third-layer" style={{ backgroundColor: bannerColors.third }}></div>
        <div className="box-fourth-layer"style={{ backgroundColor: bannerColors.fourth }}></div>
        <div className="box-fifth-layer"style={{ backgroundColor: bannerColors.fifth }}></div>
        <div className="box-sixth-layer"style={{ backgroundColor: bannerColors.sixth }}></div>
        <div className="box-seventh-layer"style={{ backgroundColor: bannerColors.seventh }}></div>
        <div className="box-eighth-layer"style={{ backgroundColor: bannerColors.eighth }}></div>
        <div className="box-ninth-layer"style={{ backgroundColor: bannerColors.ninth }}></div>
        <div className="box-tenth-layer"style={{ backgroundColor: bannerColors.tenth}}></div>
        <div className="box-content-box" style={{ backgroundColor: bannerColors.hover }}><a>{t('box.1')}</a></div>
      </div>
      <div className="box-layered-box"  onClick={handleBox2Click}>
<div className="box-base-layer" style={{ backgroundColor: bannerColors.base }}></div>
        <div className="box-top-layer" style={{ backgroundColor: bannerColors.hover }}></div>
        <div className="box-third-layer" style={{ backgroundColor: bannerColors.third }}></div>
        <div className="box-fourth-layer"style={{ backgroundColor: bannerColors.fourth }}></div>
        <div className="box-fifth-layer"style={{ backgroundColor: bannerColors.fifth }}></div>
        <div className="box-sixth-layer"style={{ backgroundColor: bannerColors.sixth }}></div>
        <div className="box-seventh-layer"style={{ backgroundColor: bannerColors.seventh }}></div>
        <div className="box-eighth-layer"style={{ backgroundColor: bannerColors.eighth }}></div>
        <div className="box-ninth-layer"style={{ backgroundColor: bannerColors.ninth }}></div>
        <div className="box-tenth-layer"style={{ backgroundColor: bannerColors.tenth}}></div>
        <div className="box-content-box" style={{ backgroundColor: bannerColors.hover }}><p>{t('box.2')}</p></div>
      </div>
    </div>

  );
};
Box.propTypes = {
  updateBannerColors: PropTypes.func.isRequired,
  bannerColors: PropTypes.object.isRequired,
};
export default Box;
