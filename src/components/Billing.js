import GreyButton from "../components/GreyButton";
import { Grid, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: "20px",
  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,
}));

const Billing = (props) => {
  var totalOffPrice = 0,
    totalPrice = 0;
  props.items.forEach((item) => {
    totalOffPrice += parseInt(item.offPrice);
    totalPrice += parseInt(item.price);
  });

  return (
    <BoxStyle width="60%" m="0 auto 0 auto">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        color={grey[600]}
      >
        <Grid item>
          <Typography>مجموع قیمت کالا ها</Typography>
        </Grid>
        <Grid item>
          <Typography>{totalPrice} تومان</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Typography>جمع سبد خرید</Typography>
        </Grid>
        <Grid item>
          <Typography>{totalOffPrice} تومان</Typography>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <Grid
        color="red"
        container
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <Typography>سود شما از این خرید</Typography>
        </Grid>
        <Grid item>
          <Typography>{totalPrice - totalOffPrice} تومان</Typography>
        </Grid>
      </Grid>
      <Box width="fit-content" sx={{ margin: "10px auto 0 auto" }}>
        <GreyButton variant="outlined">تسویه حساب</GreyButton>
      </Box>
    </BoxStyle>
  );
};
export default Billing;
