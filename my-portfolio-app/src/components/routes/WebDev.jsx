
import Portfolio from "../webdev/Portfolio";
import Banner from "../Header/Banner";
import "./webdev.scss"

const WebDev = () => {
    return (
        <div>
      <Banner></Banner>
      <div className="webdev-container">
      <a href="/">Go Back</a>
      <Portfolio></Portfolio>
    </div></div>
  );
};

export default WebDev;