import { Box, Typography, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

const PageFooter = (props) => {
  return (
    <Box sx={{ backgroundColor: grey[800], height: "10rem" }}>
      <Grid container justifyContent="center" height="100%" alignItems="center">
        <Typography color="#ffffff">
        © تمامی حقوق این وب سایت برای شرکت موزیک استور محفوظ است.
        </Typography>{" "}
      </Grid>
    </Box>
  );
};
export default PageFooter;
