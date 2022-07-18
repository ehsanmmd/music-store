import { Grid, Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux/es/exports";
import { userActions } from "../store/user";

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: "20px",
  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 6px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,
}));

const PaymentButton = styled(Button)(({ theme }) => ({
  margin: "15px",
  color: grey[100],
  borderColor: grey[600],
  backgroundColor: grey[600],
  "&:hover": {
    backgroundColor: grey[100],
    color: grey[500],
    borderColor: grey[600],
  },
}));

const ProductBoard = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (id) => () => {
    dispatch(userActions.pushIntoCartItems(id));
  };

  return (
    <Grid container justifyContent="space-around">
      <BoxStyle width="30%">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img src={props.item.imageLgUrl} alt="" />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "tahoma",
                direction: "ltr",
                fontWeight: "bold",
                color: grey[700],
              }}
            >
              {props.item.title}
            </Typography>
          </Grid>
        </Grid>
      </BoxStyle>
      <Box padding="4rem">
        <Grid item>
          <Typography variant="h6">ویژگی ها:</Typography>
          <br />
          <br />
          {props.item.specs.map((spec) => (
            <>
              <Typography
                color={grey[600]}
                display="inline-block"
                key={spec[0]}
              >
                {spec[0]}:
              </Typography>
              <Typography display="inline-block">{spec[1]}</Typography>
              <br />
            </>
          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <PaymentButton
            variant="contained"
            onClick={addToCartHandler(props.item.uid)}
          >
            اضافه کردن به سبد خرید
          </PaymentButton>
        </Grid>
      </Box>
    </Grid>
  );
};
export default ProductBoard;
