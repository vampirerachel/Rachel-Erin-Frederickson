import Header from "../Header/Header";
import Footer from "../footer/Footer";
import Portfolio from "../webdev/Portfolio";
import { BannerProvider } from "../header/BannerContext";
const Webdev = () => {
  return (
    <BannerProvider>
    <div>
          <Header></Header>
          <Portfolio></Portfolio>
      <Footer></Footer>
    </div></BannerProvider>
  );
};

export default Webdev;
