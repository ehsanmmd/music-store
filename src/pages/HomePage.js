import Helmet from "react-helmet";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
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
      <Carousel interval="4000" indicators={false} sx={{ boxShadow: "0" }}>
        <Paper>
          <img src={aks1} alt="" style={{ maxWidth: "100vw" }} />
        </Paper>
        <Paper>
          <img src={aks2} alt="" style={{ maxWidth: "100vw" }} />
        </Paper>
        <Paper>
          <img src={aks3} alt="" style={{ maxWidth: "100vw" }} />
        </Paper>
        <Paper>
          <img src={aks4} alt="" style={{ maxWidth: "100vw" }} />
        </Paper>
        <Paper>
          <img src={aks5} alt="" style={{ maxWidth: "100vw" }} />
        </Paper>
      </Carousel>
    </>
  );
};
export default HomePage;
