import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const emptyImage = require("../images/no-product.png");

const ProductEmpty = () => {
  return (
    <Box sx={{ mb: "100px" }}>
      <img src={emptyImage} alt="" />
      <Typography variant="h5" color={grey[700]}>
        متاسفانه محصولی پیدا نشد
      </Typography>
    </Box>
  );
};
export default ProductEmpty;
