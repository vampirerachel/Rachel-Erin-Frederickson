
import VideoPlayer from './VideoPlayer';
import './embeded.scss'; // Make sure to adjust the path based on your project structure

const Embeded = () => {
  return (
    <div className="embeded-container">
      <h3>Check out these simple JavaScript algorithms Ive coded</h3>
      <ul>
        <li>
          <VideoPlayer />
        </li>
        <li>Color Picker</li>
      </ul>
    </div>
  );
};

export default Embeded;
