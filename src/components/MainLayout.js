import { Box } from "@mui/system";
import MainHeader from "./layout/MainHeader";

const MainLayout = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <MainHeader></MainHeader>
    </Box>
  );
};

export default MainLayout;
