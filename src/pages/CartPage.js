import { useContext } from "react";
import UserContext from "../store/user-context";
import CartPageItemCard from "../components/CartPageItemCard";
import { Grid, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import emptyCartSvg from "../images/empty-cart.svg";
import Billing from "../components/Billing";

const CartPage = (props) => {
  const userCtx = useContext(UserContext);

  const deleteItemHandler = (uid) => () => {
    userCtx.deleteFromCartItems(uid);
  };

  const cartContent = (
    <Grid container direction="row" gap="2%">
      <Grid container direction="column" gap="10px" width="49%">
        {userCtx.cartItems.map((item) => (
          <CartPageItemCard key={item.uid} onDeleteClick={deleteItemHandler}>
            {item}
          </CartPageItemCard>
        ))}
      </Grid>
      <Grid item width="47%">
        <Billing items={userCtx.cartItems} />
      </Grid>
    </Grid>
  );

  const emptyCart = (
    <Box sx={{ height: "300px" }} textAlign="center">
      <img alt="" src={emptyCartSvg} height="100%" />
      <Typography color={grey[600]} variant="h5" m="2rem">
        شما محصولی در سبد خرید ندارید
      </Typography>
    </Box>
  );
  return (
    <Box sx={{ p: "20px" }}>
      <Typography variant="h6" sx={{ mb: "20px" }}>
        سبد خرید
      </Typography>
      {userCtx.cartItems.length > 0 ? cartContent : emptyCart}
    </Box>
  );
};
export default CartPage;
