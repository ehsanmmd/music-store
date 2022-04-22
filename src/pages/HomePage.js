import Helmet from "react-helmet";
import Carousel from "react-material-ui-carousel";
import aks1 from "../images/home/img_lg_1.jpg";
import aks2 from "../images/home/img_lg_2.jpg";
import aks3 from "../images/home/img_lg_3.jpg";
import aks4 from "../images/home/img_lg_4.jpg";
import aks5 from "../images/home/img_lg_5.jpg";

const HomePage = (props) => {
  return (
    <>
      <Helmet>
        <title>Yamaha Music Store</title>
      </Helmet>
      <Carousel interval="4000" indicators={false} sx={{ boxShadow: "0" }} >
        <img src={aks1} style={{ maxWidth: "100vw" }} />
        <img src={aks2} style={{ maxWidth: "100vw" }} />
        <img src={aks3} style={{ maxWidth: "100vw" }} />
        <img src={aks4} style={{ maxWidth: "100vw" }} />
        <img src={aks5} style={{ maxWidth: "100vw" }} />
      </Carousel>
    </>
  );
};
export default HomePage;
