import { Box, Grid, Typography, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: "20px",
  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,
}));

const CartPageItemCard = (props) => {
  return (
    <Grid item>
      <BoxStyle>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Box
              component="img"
              src={props.children.imageSmUrl}
              height="150px"
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              height="100%"
            >
              <Grid item>
                <Typography display="inline">
                  {props.children.type} مدل{" "}
                </Typography>
                <Typography display="inline" fontFamily="sans-serif">
                  {props.children.title}
                </Typography>
              </Grid>
              <Grid item textAlign="left">
                <Typography>{props.children.price} تومان</Typography>
                <IconButton
                  sx={{ mt: "10px" }}
                  onClick={props.onDeleteClick(props.children.uid)}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxStyle>
    </Grid>
  );
};
export default CartPageItemCard;
