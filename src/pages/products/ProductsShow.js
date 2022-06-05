import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import ProductEmpty from "./ProductEmpty";
import { grey } from "@mui/material/colors";
import { productsList } from "../../api/productApi";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),

  boxShadow: `rgb(145 158 171 / 64%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,

  "&:hover": {
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
  },
}));

const ProductsShow = (props) => {
  const userCtx = useContext(UserContext);

  const addToCartHandler = (id) => () => {
    var selectedProduct = productsList.find((p) => p.uid === id);
    userCtx.pushIntoCartItems(selectedProduct);
  };

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
              {/* <Box sx={{ textAlign: "left" }}> */}
              <Grid
                container
                direction="row-reverse"
                justifyContent="space-between"
              >
                <Grid item>
                  <Rating
                    size="small"
                    value={product.rate}
                    precision={0.5}
                    sx={{ direction: "ltr", color: grey[500] }}
                  />
                </Grid>
                <Grid>
                  <IconButton onClick={addToCartHandler(product.uid)}>
                    <AddCircleIcon></AddCircleIcon>
                  </IconButton>
                </Grid>
              </Grid>
              {/* </Box> */}
              <Typography sx={{ fontFamily: "tahoma", direction: "ltr" }}>
                {product.title}
              </Typography>
              <Typography>{product.offPrice} تومان</Typography>
              {product.offPrice !== product.price && (
                <Typography
                  color={grey[500]}
                  sx={{ textDecoration: "line-through" }}
                >
                  {product.price}
                </Typography>
              )}
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
