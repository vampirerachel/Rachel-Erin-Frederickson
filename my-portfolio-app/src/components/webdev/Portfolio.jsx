
import Embeded from './Embeded';
import './portfolio.scss'; 

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <p>
        <a href="/">Go back</a>
      </p>
      <div className="webbio">
        <h2>Bio</h2>
        <p>
          Multifaceted, motivated Full Stack Developer with comprehensive training in fundamentals of both back-end and front-end UI’s. Accomplished artist who brings keen visual design mindset to all aspects of site development. People person with superior communications skills including active listening, effective questioning, and meaningful collaboration.
        </p>
      
      <ul>
        <h3>My Tech Stack</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
              </ul>
      <ul>
        <h3>Soft Skills</h3>
        <li>Visionary Artistic Eye for Design</li>
        <li>Persuasive and Empathetic Communicator</li>
        <li>Reliable Leadership</li>
        <li>Attentive and Intuitive Listener</li>
              </ul>
              </div>
      <ul>
        <h3>Projects</h3>
        <ul>
          <li>
            <Embeded />
          </li>
          <li>Linked</li>
        </ul>
      </ul>
    </div>
  );
};

export default Portfolio;
