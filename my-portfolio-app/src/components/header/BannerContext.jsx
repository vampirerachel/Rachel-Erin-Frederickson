import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
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
    content: '#ad9384',
    background: '#b59797',
    text: '#070707',
  });


  const updateBannerColors = (newColors) => {
    setBannerColors(newColors);
  };

  return (
    <BannerContext.Provider value={{ bannerColors, updateBannerColors }}>
      {children}
    </BannerContext.Provider>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { BannerContext };