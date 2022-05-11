import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "15px",
  color: grey[600],
  borderColor: grey[600],
  "&:hover": {
    backgroundColor: grey[100],
    color: grey[500],
    borderColor: grey[600],
  },
}));

const GreyButton = (props) => {
  return (
    <StyledButton variant={props.variant} sx={{ width: props.width }} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
export default GreyButton;
