
import Banner from './Banner';
import Navigation from './Navigation';


const Header = ({ toggleMenu }) => {
  return (
    <>
      <Banner />
      <Navigation toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
