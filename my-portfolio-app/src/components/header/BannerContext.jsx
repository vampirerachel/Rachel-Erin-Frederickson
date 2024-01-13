import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [isBannerVisible, setBannerVisible] = useState(true);

  const toggleBanner = () => {
    setBannerVisible((prevVisible) => !prevVisible);
  };

  return (
    <BannerContext.Provider value={{ isBannerVisible, toggleBanner }}>
      {children}
    </BannerContext.Provider>
  );
};

BannerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error('useBanner must be used within a BannerProvider');
  }
  return context;
};
