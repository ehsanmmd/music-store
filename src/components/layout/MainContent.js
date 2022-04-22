import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const MainContent = (props) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      {props.children}
    </Box>
  );
};
export default MainContent;
