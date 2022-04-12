import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { Menu, MenuItem, Typography } from "@mui/material";

import { Button } from "@mui/material";

const productsList = [
  "پیانو",
  "کیبورد",
  "گیتار کلاسیک",
  "گیتار الکتریک",
  "گیتار باس",
  "ویالن",
  "درامز",
  "ترومپت",
];

const ProductsMenu = (props) => {
  const [productsMenuAnchorElement, setProductsMenuAnchorElement] =
    useState(null);

  const handleProductMenuClick = (event) => {
    setProductsMenuAnchorElement(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchorElement(null);
  };

  return (
    <>
      <Button
        sx={{
          color: grey[700],
          "&:hover": {
            backgroundColor: "inherit",
            color: grey[400],
          },
        }}
        onClick={handleProductMenuClick}
      >
        <MenuIcon sx={{ margin: "5px" }} />
        <Typography variant="h6">محصولات</Typography>
      </Button>
      <Menu
        open={Boolean(productsMenuAnchorElement)}
        anchorEl={productsMenuAnchorElement}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleProductsMenuClose}
      >
        {productsList.map((product) => {
          console.log(product);
          return (
            <MenuItem sx={{ marginLeft: "1rem" }}>
              <Typography color={grey[600]}>{product}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
export default ProductsMenu;
