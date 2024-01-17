// Portfolio.jsx
import Tecstack from '../buttons/tecstack';
import Embeded from './Embeded';
import './portfolio.scss';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
    <div >
                <div className="row-one">
    <Tecstack></Tecstack>
    <div className="webbio">
        <h2>Bio</h2>
        <p>
        Coding since 2022, I&apos;m on a mission to tame the digital wild! A seasoned problem-solver, I leverage React to craft elegant styles and design user-friendly interfaces. Embracing innovative thinking, I utilize my artistic insight to enhance the aesthetics of the web. As an organized backend enthusiast with a passion for efficiency,I&apos;m ready to turn codes into a symphony! Let&apos;s make the internet awesome together!
        </p>
    </div>
                </div>
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
