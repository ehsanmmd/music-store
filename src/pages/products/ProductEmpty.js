import { Typography, Box, Grid, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@emotion/react";

const emptyImage = require("../../images/no-product.png");
const emptyImageS = require("../../images/no-productS.png");

const ProductEmpty = () => {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container justifyContent="center">
      <Grid item lg={12} xl={12}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Box
              component="img"
              src={mdScreen === true ? emptyImageS : emptyImage}
            />
          </Grid>
          <Grid item>
            <Typography
              color={grey[600]}
              variant="h5"
              m="2rem"
              textAlign="center"
            >
              متاسفانه محصولی پیدا نشد
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductEmpty;
