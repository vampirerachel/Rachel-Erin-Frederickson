import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Update this line
import './footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="linkedin-link">
        <a href="YOUR_LINKEDIN_PROFILE_URL" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
              </a>
      </div><h3>Thanks for visiting</h3>
      <button className="scroll-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
