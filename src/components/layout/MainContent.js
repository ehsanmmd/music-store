import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";

const MainContent = (props) => {
  return (
    <Box>
      <Toolbar />
      <Toolbar />
      {props.children}
    </Box>
  );
};
export default MainContent;
