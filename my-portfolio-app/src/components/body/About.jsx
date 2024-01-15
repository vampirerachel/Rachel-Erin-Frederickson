// About.jsx

import "../body/about.scss";
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <section className="about-section">
        <h2>{t('about.title')}</h2>

        <div className="content-container">
          <div className="sub-section">
            <p>{t('about.greetings')}</p>
          </div>

          <div className="sub-section">
            <h3>{t('about.acrylic.title')}</h3>
            <p>{t('about.acrylic.description')}</p>
          </div>

          <div className="sub-section">
            <h3>{t('about.digital.title')}</h3>
            <p>{t('about.digital.description')}</p>
          </div>

          <div className="sub-section">
            <h3>{t('about.join.title')}</h3>
            <p>{t('about.join.description')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;