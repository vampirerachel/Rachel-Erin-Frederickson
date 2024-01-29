// Header.jsx
import Banner from "../header/Banner";
import Navigation from "./Navigation";
import { BannerContext } from "../header/BannerContext";
import { useContext } from "react";

const Header = () => {


  const { bannerColors } = useContext(BannerContext); 

  return (
    <div>
      <Banner bannerColors={bannerColors} />
      <Navigation />
    </div>
  );
};

export default Header;
