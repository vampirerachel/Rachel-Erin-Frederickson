
import './colorpicker.scss';
import ColorBox from '../body/ColorBox';

const ColorPicker = () => {



  return (
    <div className="colorpicker-container">
      <div className="widget">
        <p className="pickerbg">
          Here is a JavaScript function that gives you a different hex color. As an artist who loves color, I thought
          this was so fun to learn how to generate random colors and their hex-codes to find inspiration when choosing
          a color palette: 
        </p>
      </div>
      <div className="colorbox-container">
        <ColorBox />
      </div>
    </div>
  );
};

export default ColorPicker;
