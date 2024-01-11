

import './toggle.scss'; // Import the stylesheet
import PropTypes from 'prop-types'

const Toggle = ({ toggleLanguage, langLabel, isActive }) => {


  return (
      <button className = {`language-toggle ${isActive ? 'active' : ""}`} onClick={toggleLanguage}>
      {langLabel}
    </button>
  );
};

Toggle.propTypes = {
    toggleLanguage: PropTypes.func.isRequired,
    langLabel: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default Toggle;
