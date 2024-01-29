import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [isBannerVisible, setBannerVisible] = useState(true);
  const [bannerColors, setBannerColors] = useState({
    base: '#2e1f1f',
    second: '#39404a',
    third: '#706b6b',
    fourth: '#394f5a',
    fifth: '#9e7f7f',
    sixth: '#b9a099',
    seventh: '#e7c9c9',
    eighth: '#e1dcdc',
    ninth: '#d2d2d2',
    tenth: '#c5c1c1',
    hover: '#ad9384',
    navBackground: '#b59797',
    navText: '#070707',
  });

  const toggleBanner = () => {
    setBannerVisible((prevVisible) => !prevVisible);
  };

  const updateBannerColors = (newColors) => {
    setBannerColors(newColors);
  };

  return (
    <BannerContext.Provider value={{ isBannerVisible, toggleBanner, bannerColors, updateBannerColors }}>
      {children}
    </BannerContext.Provider>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { BannerContext };