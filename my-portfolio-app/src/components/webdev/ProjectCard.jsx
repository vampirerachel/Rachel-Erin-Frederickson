import PropTypes from "prop-types"
import "./projectCard.scss"
const ProjectCard = ({ name, description, link, thumbnail }) => {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <img className="thumbnail"src={thumbnail} alt={`${name} Thumbnail`} />
    </div>
  );
};
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
export default ProjectCard;