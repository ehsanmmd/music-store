import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";

const pianoList = [
  {
    title: "CLP-795GP",
    rate: 4.3,
    price: 68000000,
    offPrice: 61500000,
    imageUrl: require("../../images/Products/piano/CLP-795GPPE_th.jpg"),
  },
  {
    title: "CLP-785",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/CLP-785PE_th.jpg"),
  },
  {
    title: "CVP-701",
    rate: 4.4,
    price: 70000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/CVP-701.jpg"),
  },
  {
    title: "CVP-809",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/CVP-809.jpg"),
  },
  {
    title: "CVP-809GP",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/CVP-809GP.jpg"),
  },
  {
    title: "DGX-660",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/DGX-660.jpg"),
  },
  {
    title: "DGX-670",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/DGX-670.jpg"),
  },
  {
    title: "GB1K-1",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/GB1K-1.jpg"),
  },
  {
    title: "P-515",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/P-515.jpg"),
  },
  {
    title: "YDP-184",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/piano/YDP-184.jpg"),
  },
];

const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),

  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,

  "&:hover": {
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
  },
}));

const ProductPianos = (props) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ padding: "2rem", justifyContent: "space-evenly", width: "100%" }}
    >
      {pianoList.map((piano) => (
        <Grid item>
          <CardStyle>
            <CardMedia
              component="img"
              image={piano.imageUrl}
              height="240"
            ></CardMedia>
            <CardContent>
              <Typography sx={{ fontFamily: "tahoma", direction: "ltr" }}>
                {piano.title}
              </Typography>
              <Typography>{piano.price} تومان</Typography>
            </CardContent>
          </CardStyle>
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductPianos;
