import { Grid, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: "20px",
  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 6px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,
}));

const ProductBoard = (props) => {
  return (
    <Grid container justifyContent="space-around">
      <BoxStyle width="30%">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <img src={props.item.imageLgUrl} alt="" />
          </Grid>
          <Grid item>
            <Typography variant="h6">قیمت {props.item.price} تومان</Typography>
            <Typography variant="h6">
              {" "}
              قیمت بعد از تخفیف {props.item.offPrice} تومان
            </Typography>
          </Grid>
        </Grid>
      </BoxStyle>
      <Box>
        <Grid item>
          <Typography variant="h6">ویژگی ها:</Typography>
        </Grid>
      </Box>
      <Box>
        <Grid item></Grid>
      </Box>
    </Grid>
  );
};
export default ProductBoard;
