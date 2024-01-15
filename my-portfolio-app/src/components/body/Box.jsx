import { useTranslation } from 'react-i18next';
import './box.scss';

const Box = () => {
  const { t } = useTranslation();

  return (
    <div className="box-container">
      <div className="box-layered-box">
        <div className="box-base-layer"></div>
        <div className="box-top-layer"></div>
        <div className="box-third-layer"></div>
        <div className="box-fourth-layer"></div>
        <div className="box-fifth-layer"></div>
        <div className="box-sixth-layer"></div>
        <div className="box-seventh-layer"></div>
        <div className="box-eighth-layer"></div>
        <div className="box-ninth-layer"></div>
        <div className="box-tenth-layer"></div>
        <div className="box-content-box"><p>{t('box.1')}</p></div>
      </div>
      <div className="box-layered-box">
        <div className="box-base-layer"></div>
        <div className="box-top-layer"></div>
        <div className="box-third-layer"></div>
        <div className="box-fourth-layer"></div>
        <div className="box-fifth-layer"></div>
        <div className="box-sixth-layer"></div>
        <div className="box-seventh-layer"></div>
        <div className="box-eighth-layer"></div>
        <div className="box-ninth-layer"></div>
        <div className="box-tenth-layer"></div>
        <div className="box-content-box"><p>{t('box.2')}</p></div>
      </div>
    </div>
  );
};

export default Box;
