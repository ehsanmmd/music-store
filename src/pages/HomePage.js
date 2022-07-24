import Helmet from "react-helmet";
import { Box } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import aks1L from "../images/home/img_lg_1.jpg";
import aks2L from "../images/home/img_lg_2.jpg";
import aks3L from "../images/home/img_lg_3.jpg";
import aks4L from "../images/home/img_lg_4.jpg";
import aks5L from "../images/home/img_lg_5.jpg";
import aks1S from "../images/home/img_sm_1.jpg";
import aks2S from "../images/home/img_sm_2.jpg";
import aks3S from "../images/home/img_sm_3.jpg";
import aks4S from "../images/home/img_sm_4.jpg";
import aks5S from "../images/home/img_sm_5.jpg";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const HomePage = (props) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Helmet>
        <title>Yamaha Music Store</title>
      </Helmet>
      <Carousel interval="4000" indicators={false} sx={{ boxShadow: "0" }}>
        <Box
          component="img"
          src={small === true ? aks1L : aks1S}
          alt=""
          style={{ maxWidth: "100vw" }}
        />
        <Box
          component="img"
          src={small === true ? aks2L : aks2S}
          alt=""
          style={{ maxWidth: "100vw" }}
        />
        <Box
          component="img"
          src={small === true ? aks3L : aks3S}
          alt=""
          style={{ maxWidth: "100vw" }}
        />
        <Box
          component="img"
          src={small === true ? aks4L : aks4S}
          alt=""
          style={{ maxWidth: "100vw" }}
        />
        <Box
          component="img"
          src={small === true ? aks5L : aks5S}
          alt=""
          style={{ maxWidth: "100vw" }}
        />
      </Carousel>
    </>
  );
};
export default HomePage;
