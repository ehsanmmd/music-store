import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Divider,
  Button,
  Typography,
  Avatar,
  Badge,
  Grid,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";

import { grey } from "@mui/material/colors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

import logo from "../../logo/yamaha.svg";
import avatar from "../../images/20210214_162132_.jpg";
import SearchArea from "../SearchArea";
import UserMenu from "../UserMenu";
import ProductsMenu from "../ProductsMenu";
import { userActions } from "../../store/user";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "15px",
  color: grey[600],
  borderColor: grey[600],
  "&:hover": {
    backgroundColor: grey[100],
    color: grey[500],
    borderColor: grey[600],
  },
}));

const MainHeader = () => {
  const [avatarAnchorElement, setavatarAnchorElement] = useState(null);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setavatarAnchorElement(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setavatarAnchorElement(null);
  };

  const handleLogoutUser = () => {
    setavatarAnchorElement(null);
    dispatch(userActions.onLoggout());
  };

  const handleloginUser = () => {
    navigate("/login");
    setavatarAnchorElement(null);
  };

  const handleCartIconClick = () => {
    navigate("/cart");
  };

  return (
    <AppBar sx={{ boxShadow: 1, backgroundColor: "#ffffff" }}>
      <Toolbar
        sx={{
          backgroundColor: "#ffffff",
          // height: "15vh",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          direction={{ sm: "row", xs: "column" }}
        >
          <Grid item xl={6} lg={6} md={8} sm={9}>
            <Grid container alignItems="center">
              <Grid item>
                <Box sx={{ height: "60px", width: "120px" }}>
                  <Link href="/">
                    <img alt="" src={logo} />
                  </Link>
                </Box>
              </Grid>
              <Grid item flex={1}>
                <SearchArea />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={6} lg={6} md={4} sm={3}>
            <Grid container justifyContent="flex-end">
              {isLoggedIn === true ? (
                <Grid item>
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="Ehsan Mahmoudi" src={avatar}></Avatar>
                  </IconButton>
                  <UserMenu
                    onCloseUserMenu={handleCloseUserMenu}
                    onLogoutUser={handleLogoutUser}
                    avatarAnchorEl={avatarAnchorElement}
                  />
                </Grid>
              ) : (
                <Grid item>
                  <StyledButton variant="outlined" onClick={handleloginUser}>
                    <LoginIcon sx={{ margin: "5px" }} />
                    <Typography textAlign="center">ورود</Typography>
                  </StyledButton>
                </Grid>
              )}

              {isLoggedIn === true && (
                <>
                  <Grid item>
                    <Divider orientation="vertical" sx={{ height: "2.5rem" }} />
                  </Grid>
                  <Grid item>
                    <IconButton onClick={handleCartIconClick}>
                      <Badge badgeContent={cartItems.length} color="warning">
                        <ShoppingCartIcon sx={{ margin: "5px" }} />
                      </Badge>
                    </IconButton>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar>
        <ProductsMenu />
      </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
