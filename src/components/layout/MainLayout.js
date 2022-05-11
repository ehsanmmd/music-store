import { Box } from "@mui/system";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import MainContent from "./MainContent";
import MainHeader from "./MainHeader";
import PageFooter from "./PageFooter";
import { Routes, Route } from "react-router-dom";
import ProductPianos from "../../pages/products/productLists/ProductPianos";
import ProductKeyboards from "../../pages/products/productLists/ProductKeyboards";
import ProductClassicalGuitars from "../../pages/products/productLists/ProductBassGuitars";
import ProductElectricGuitars from "../../pages/products/productLists/ProductElectricGuitars";
import ProductBassGuitars from "../../pages/products/productLists/ProductBassGuitars";
import ProductDrums from "../../pages/products/productLists/ProductDrums";
import ProductViolins from "../../pages/products/productLists/ProductViolins";
import ProductTrumpets from "../../pages/products/productLists/ProductTrumpets";

const MainLayout = (props) => {
  return (
    <Box /*sx={{ display: "flex", flexDirection: "column" }}*/>
      <MainHeader />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/piano" element={<ProductPianos />} />
          <Route path="/products/keyboard" element={<ProductKeyboards />} />
          <Route
            path="/products/classical-guitar"
            element={<ProductClassicalGuitars />}
          />
          <Route
            path="/products/electric-guitar"
            element={<ProductElectricGuitars />}
          />
          <Route path="/products/bass-guitar" element={<ProductBassGuitars />} />
          <Route path="/products/violin" element={<ProductViolins />} />
          <Route path="/products/drums" element={<ProductDrums />} />
          <Route path="/products/trumpet" element={<ProductTrumpets />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </MainContent>
      <PageFooter />
    </Box>
  );
};

export default MainLayout;
