import './Colorbox.scss';

const Colorbox = ({ colors }) => {
  return (
    <div className="cbox-container">
      {colors.map((color, index) => (
        <div key={`${index}-cbox`} className="cbox-layered-cbox" style={{ backgroundColor: color }}>
          <div className="cbox-base-layer"></div>
          <div className="cbox-top-layer"></div>
          <div className="cbox-third-layer"></div>
          <div className="cbox-fourth-layer"></div>
          <div className="cbox-fifth-layer"></div>
          <div className="cbox-sixth-layer"></div>
          <div className="cbox-seventh-layer"></div>
          <div className="cbox-eighth-layer"></div>
          <div className="cbox-ninth-layer"></div>
          <div className="cbox-tenth-layer"></div>
          <div className="cbox-content-box">
            <p>{color}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Colorbox;
