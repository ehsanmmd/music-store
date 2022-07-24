import { useParams } from "react-router";
import { productsList } from "../../api/productApi";
import { Grid, Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

import { userActions } from "../../store/user";

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

const ProductDescription = (props) => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  let { uid } = useParams();

  const addToCartHandler = (id) => () => {
    dispatch(userActions.pushIntoCartItems(id));
  };

  const product = productsList.find((product) => product.uid === uid);

  return (
    <Grid container justifyContent="space-around" marginTop="2rem">
      <Grid item xs={12} sm={6} md={4} lg={5} xl={5}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Box
              component="img"
              src={
                largeScreen === true
                  ? product.imageLgUrl
                  : product.imageMdUrl
              }
              alt=""
            />
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
              {product.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
        <Box padding="0 1rem 0 1rem">
          <Grid item>
            <Typography variant="h6">ویژگی ها:</Typography>
            <br />
            <br />
            {product.specs.map((spec) => (
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
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
        <Grid container justifyContent="center">
          <PaymentButton
            variant="contained"
            onClick={addToCartHandler(product.uid)}
          >
            اضافه کردن به سبد خرید
          </PaymentButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductDescription;
