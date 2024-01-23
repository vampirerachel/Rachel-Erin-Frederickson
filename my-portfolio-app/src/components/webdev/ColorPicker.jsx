import { useState } from 'react';
import './colorpicker.scss';
import Colorbox from '../body/ColorBox';

const ColorPicker = () => {
  const [boxColors, setBoxColors] = useState(Array(10).fill(getRandomHexColor()));

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const handleClick = () => {
    const newColors = Array(10).fill().map(() => getRandomHexColor());
    setBoxColors(newColors);
  };

  return (
    <div className="colorpicker-container">
      <div className="widget">
        <p className="pickerbg">
          Here is a JavaScript function that gives you a different hex color. As an artist who loves color, I thought
          this was so fun to learn how to generate random colors and their hex-codes to find inspiration when choosing
          a color palette: 
        </p>
        <button type="button" className="change-color" onClick={handleClick}>
          Change color
        </button>
      </div>
      <div className="colorbox-container">
        <Colorbox colors={boxColors} />
      </div>
    </div>
  );
};

export default ColorPicker;
