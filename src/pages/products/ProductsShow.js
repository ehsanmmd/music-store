import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import styled from "@emotion/styled";
import ProductEmpty from "./ProductEmpty";
import { grey } from "@mui/material/colors";
import { productsList } from "../../api/productApi";

const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),

  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,

  "&:hover": {
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
  },
}));

const ProductsShow = (props) => {
  const filteredProducts = productsList.filter(
    (product) => product.category === props.category
  );
  return filteredProducts.length > 0 ? (
    <Grid
      container
      spacing={3}
      sx={{
        padding: "2rem",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {filteredProducts.map((product) => (
        <Grid item key={product.title}>
          <CardStyle>
            <CardMedia
              component="img"
              image={product.imageUrl}
              height="240"
              // max-width="350"
            ></CardMedia>
            <CardContent>
              <Box sx={{ textAlign: "left" }}>
                <Rating
                  size="small"
                  value={product.rate}
                  precision={0.5}
                  sx={{ direction: "ltr", color: grey[500] }}
                />
              </Box>
              <Typography sx={{ fontFamily: "tahoma", direction: "ltr" }}>
                {product.title}
              </Typography>
              <Typography>{product.price} تومان</Typography>
            </CardContent>
          </CardStyle>
        </Grid>
      ))}
    </Grid>
  ) : (
    <ProductEmpty />
  );
};
export default ProductsShow;
