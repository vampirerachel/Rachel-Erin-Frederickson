// Portfolio.jsx
import Tecstack from '../buttons/tecstack';
import ProjectCard from './ProjectCard';
import './portfolio.scss';
import calorieImage from "../../images/caloriecounter.jpg"
import searchImage from "../../images/imagesearch.jpg"
import phonebook from "../../images/phonebook.jpg"
import webstudio from "../../images/webstudio.jpg"


const Portfolio = () => {
    return (
    <div className="portfolio-container">
    <div>
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
        <ul className='projectsList'>
            <li className='projectCard'><ProjectCard
            name="SlimMom"
            description="Here is a team project where we created an app for post-pregnancy moms, simplifying calorie tracking, meal planning, and community support to help achieve health and fitness goals. Click the url below to view our work."
            link="https://gogonzogo.github.io/Slimmom/"
            thumbnail={calorieImage}/></li>
            <li className='projectCard'><ProjectCard
            name="WebStudio"
            description="In this project, I showcase my proficiency in HTML and CSS by adhering to a set of strict coding standards and implementing best practices. The portfolio website comprises multiple pages, each meticulously crafted to reflect clean code, responsive design, and optimal user experience."
            link="https://vampirerachel.github.io/WebStudio/"
            thumbnail={webstudio}/></li>
            <li className='projectCard'><ProjectCard
            name="ImageSearch"
            description="Front-end keyword search and image viewer application using React. It utilizes the Pixabay API for fetching images based on user search queries, supports pagination, and incorporates optional features like notifications and the SimpleLightbox library. Click the url below to view my work."
            link="https://vampirerachel.github.io/imageloader/"
            thumbnail={searchImage}/></li>
            <li className='projectCard'><ProjectCard
            name="PhoneBook"
            description="The React Phonebook project features user registration, login, and contact management with a secure JWT-authenticated backend. The project incorporates React Router for seamless navigation, offering public registration and login routes and a private route for contact management. The interface is finely styled using Chakra UI or Material UI, showcasing attention to design details."
            link="https://vampirerachel.github.io/phonebookapp/"
            thumbnail={phonebook}/></li>
        </ul>
    </ul>
    </div>
);
};

export default Portfolio;
