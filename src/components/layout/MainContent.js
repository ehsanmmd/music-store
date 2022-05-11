import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const MainContent = (props) => {
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      {props.children}
      <Toolbar />
    </Box>
  );
};
export default MainContent;
