import { Grid, Box } from "@mui/material";
import { useParams } from "react-router";
import { productsList } from "../../api/productApi";
import ProductBoard from "../../components/ProductBoard";

const ProductDescription = (props) => {
  let { uid } = useParams();
  const product = productsList.find((product) => product.uid === uid);

  return (
    <Box height="70vh">
      <Grid
        container
        direction="row"
        alignItems="center"
        height="100%"
      >
        <ProductBoard item={product} />
      </Grid>
    </Box>
  );
};
export default ProductDescription;
