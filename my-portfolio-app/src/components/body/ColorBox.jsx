import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ColorBox.scss'

const ColorBox = () => {
  const { t } = useTranslation();

  const [boxColors, setBoxColors] = useState({
    base: '#2e1f1f',
    second: '#39404a',
    third: '#706b6b',
    fourth: '#394f5a',
    fifth: '#9e7f7f',
    sixth: '#b9a099',
    seventh: '#e7c9c9',
    eighth: '#e1dcdc',
    ninth: '#d2d2d2',
    tenth: '#c5c1c1',
    hover: '#ad9384',
    navBackground: '#b59797',
    navText: '#070707',
  });

  useEffect(() => {
    console.log('Initial state:', boxColors);
  }, []); // Run only once on mount

  const handleClick = () => {
    setBoxColors((prevColors) => {
      const newColors = {
        base: getRandomColor(),
        second: getRandomColor(),
        third: getRandomColor(),
        fourth: getRandomColor(),
        fifth: getRandomColor(),
        sixth: getRandomColor(),
        seventh: getRandomColor(),
        eighth: getRandomColor(),
        ninth: getRandomColor(),
        tenth: getRandomColor(),
        hover: getRandomColor(),
        navBackground: getRandomColor(),
        navText: getRandomColor(),
      };

      console.log('New state:', newColors);
      return newColors;
    });
  };

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="box-container">
      <div className="box-layered-box">
        <div className="box-base-layer" style={{ backgroundColor: boxColors.base }}></div>
        <div className="box-top-layer" style={{ backgroundColor: boxColors.hover }}></div>
        <div className="box-third-layer" style={{ backgroundColor: boxColors.third }}></div>
        <div className="box-fourth-layer"style={{ backgroundColor: boxColors.fourth }}></div>
        <div className="box-fifth-layer"style={{ backgroundColor: boxColors.fifth }}></div>
        <div className="box-sixth-layer"style={{ backgroundColor: boxColors.sixth }}></div>
        <div className="box-seventh-layer"style={{ backgroundColor: boxColors.seventh }}></div>
        <div className="box-eighth-layer"style={{ backgroundColor: boxColors.eighth }}></div>
        <div className="box-ninth-layer"style={{ backgroundColor: boxColors.ninth }}></div>
        <div className="box-tenth-layer"style={{ backgroundColor: boxColors.tenth}}></div>
        <div className="box-content-box" style={{ backgroundColor: boxColors.hover }}>
          <p>{t('box.1')}</p>
        </div>
      </div>
      <button type="button" className="change-color" onClick={handleClick}>
        Change color
      </button>
    </div>
  );
};

export default ColorBox;
