// About.jsx

import "../body/about.scss";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <section className="about-section">
        <h2>{t('About Me')}</h2>

        <div className="content-container">
          <div className="sub-section">
            <p>{t("Greetings! I'm Rachel, a multifaceted creator weaving the vibrant threads of acrylic paintings and the intricate codes of web development. With a palette of colors on canvas and a keyboard at my fingertips, I navigate between two worlds, infusing creativity into pixels and strokes alike.")}</p>
          </div>

          <div className="sub-section">
            <h3>{t('Acrylic Alchemy')}</h3>
            <p>{t("Dive into my gallery, where each brushstroke narrates a story. My acrylic paintings are more than just colors on canvas; they are a journey into emotions, nature, and the beauty that surrounds us. From bold strokes to delicate details, every piece is a testament to my passion for art.")}</p>
          </div>

          <div className="sub-section">
            <h3>{t('Digital Symphony')}</h3>
            <p>{t("Beyond the canvas, I orchestrate digital symphonies. As a skilled web developer, I architect online experiences that transcend the ordinary. Navigating through the ever-evolving landscape of technology, I bring ideas to life in the virtual realm, crafting websites that are as visually captivating as they are seamlessly functional.")}</p>
          </div>

          <div className="sub-section">
            <h3>{t('Join Me')}</h3>
            <p>{t("Join me on this creative odyssey where art and technology converge. Whether you're captivated by the vivid hues of my paintings or intrigued by the code that powers digital wonders, welcome to a space where creativity knows no bounds. Let's embark on this artistic and digital journey together.")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
