import CartPageItemCard from "../components/CartPageItemCard";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import emptyCartL from "../images/empty-cart-lg.png";
import emptyCartM from "../images/empty-cart-md.png";
import emptyCartS from "../images/empty-cart-sm.png";
import Billing from "../components/Billing";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { userActions } from "../store/user";
import { useTheme } from "@emotion/react";

const CartPage = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  let emptyImg = emptyCartS;

  if (smScreen) {
    emptyImg = emptyCartS;
  } else if (mdScreen) {
    emptyImg = emptyCartM;
  } else {
    emptyImg = emptyCartL;
  }

  const deleteItemHandler = (uid) => () => {
    dispatch(userActions.deleteFromCartItems(uid));
  };

  const cartContent = (
    <Grid container justifyContent="space-between" gap="10px">
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Grid container direction="column" gap="10px">
          {cartItems.map((item) => (
            <CartPageItemCard key={item.uid} onDeleteClick={deleteItemHandler}>
              {item}
            </CartPageItemCard>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Billing items={cartItems} />
      </Grid>
    </Grid>
  );

  const emptyCart = (
    <Grid container justifyContent="center">
      <Grid item lg={12} xl={12}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Box component="img" src={emptyImg} />
          </Grid>
          <Grid item>
            <Typography color={grey[600]} variant="h5" m="2rem" textAlign="center">
              شما محصولی در سبد خرید ندارید
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return (
    <Box sx={{ p: "20px" }}>
      <Typography variant="h6" sx={{ mb: "20px" }}>
        سبد خرید
      </Typography>
      {cartItems.length > 0 ? cartContent : emptyCart}
    </Box>
  );
};
export default CartPage;
