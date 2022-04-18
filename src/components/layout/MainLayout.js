import { Box } from "@mui/system";
import HomePage from "../../pages/HomePage";
import MainContent from "./MainContent";
import MainHeader from "./MainHeader";
import PageFooter from "./PageFooter";
import { Redirect, Routes, Route } from "react-router-dom";
import ProductPianos from "../../pages/products/ProductPianos";

const MainLayout = (props) => {
  return (
    <Box /*sx={{ display: "flex", flexDirection: "column" }}*/>
      <MainHeader />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product/pianos" element={<ProductPianos/>} />
        </Routes>
      </MainContent>
      <PageFooter />
    </Box>
  );
};

export default MainLayout;
