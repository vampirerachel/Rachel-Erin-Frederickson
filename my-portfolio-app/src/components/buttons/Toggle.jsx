// toggle.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import "./toggle.scss"

const Toggle = ({ toggleLanguage, langLabel, isActive }) => {
  const [displayedLabel, setDisplayedLabel] = useState(langLabel);

  
  const handleClick = () => {
    toggleLanguage();
    setDisplayedLabel(langLabel === 'English' ? 'Español' : 'English');
  };

  return (
    <button className={`language-toggle ${isActive ? 'active' : ""}`} onClick={handleClick}>
      {displayedLabel}
    </button>
  );
};

Toggle.propTypes = {
  toggleLanguage: PropTypes.func.isRequired,
  langLabel: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Toggle;
