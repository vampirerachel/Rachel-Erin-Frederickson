import "./tecstack.scss"

const Tecstack= () => {
 return (
    <div className="tecstack-container">
      <ul className="styled-list">
        <li >
          <div className="icon"><i className="fa-brands fa-html5"></i></div>
          <div className="title">HTML</div>
          
        </li>
        <li >
          <div className="icon"><i className="fa-brands fa-css3"></i></div>
          <div className="title">CSS</div>
          
        </li>
        <li >
          <div className="icon"><i className="fa-brands fa-js"></i></div>
          <div className="title">JavaScript</div>
        </li>
        <li>
          <div className="icon"><i className="fa-brands fa-react"></i></div>
          <div className="title">React</div>
          
        </li>
        <li >
          <div className="icon"><i className="fa-brands fa-node"></i></div>
          <div className="title">Node.js</div>
         
        </li>
      </ul>
    </div>
  );
};

export default Tecstack;
