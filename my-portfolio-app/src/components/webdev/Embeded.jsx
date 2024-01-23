import VideoPlayer from './VideoPlayer';
import ColorPicker from './ColorPicker';
import './embeded.scss'; 


const Embeded = () => {


  return (
    <div className="embeded-container">
      <h3>JavaScript</h3>
      <ul>
        <li>
          <VideoPlayer />
        </li>
        <li>
          <ColorPicker />
        </li>
      </ul>
    </div>
  );
};

export default Embeded;
