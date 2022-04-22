import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { Menu, MenuItem, Typography } from "@mui/material";

import { Button } from "@mui/material";

const productsList = [
  {
    url: "/products/piano",
    caption: "پیانو",
  },
  {
    url: "/products/keyboard",
    caption: "کیبورد",
  },
  {
    url: "/products/classical-guitar",
    caption: "گیتار کلاسیک",
  },
  {
    url: "/products/electric-guitar",
    caption: "گیتار الکتریک",
  },
  {
    url: "/products/bass-guitar",
    caption: "گیتار باس",
  },
  {
    url: "/products/violin",
    caption: "ویولن",
  },
  {
    url: "/products/drums",
    caption: "درامز",
  },
  {
    url: "/products/trumpet",
    caption: "ترومپت",
  },
];

const ProductsMenu = (props) => {
  const [productsMenuAnchorElement, setProductsMenuAnchorElement] =
    useState(null);
  let navigate = useNavigate();

  const handleProductMenuClick = (event) => {
    setProductsMenuAnchorElement(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchorElement(null);
  };

  const handleMenuItemClick = (url) => () => {
    navigate(url);
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
        {productsList.map((product, index) => (
          <MenuItem
            sx={{ marginLeft: "1rem" }}
            key={index}
            onClick={handleMenuItemClick(product.url)}
          >
            <Typography color={grey[600]}>{product.caption}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default ProductsMenu;
