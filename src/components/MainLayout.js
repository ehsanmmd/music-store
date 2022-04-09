import { Box } from "@mui/system";
import HomePage from "../pages/HomePage";
import MainContent from "./layout/MainContent";
import MainHeader from "./layout/MainHeader";
import PageFooter from "./layout/PageFooter";

const MainLayout = (props) => {
  return (
    <Box /*sx={{ display: "flex", flexDirection: "column" }}*/>
      <MainHeader />
      <MainContent>
        <HomePage />
      </MainContent>
      <PageFooter />
    </Box>
  );
};

export default MainLayout;
