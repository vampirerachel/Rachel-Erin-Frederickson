// Home.jsx

import Header from '../Header/Header';
import Box from '../body/Box';
import About from '../body/About';
import Contact from '../body/Contact';
import Footer from '../footer/Footer';
import Gallery from '../art/Gallery';
import PropTypes from "prop-types";

const Home = ({ bannerColors, updateBannerColors }) => {
  return (
    <div>
      <Header />
       <Box bannerColors={bannerColors} updateBannerColors={updateBannerColors} />
      <About />
      <Contact />
      <Footer />
      <Gallery />
    </div>
  );
};
Home.propTypes = {
  updateBannerColors: PropTypes.func.isRequired,
  bannerColors: PropTypes.object.isRequired,
};
export default Home;
