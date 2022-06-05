import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Link,
  IconButton,
  Divider,
  Button,
  Typography,
  Avatar,
  Badge,
} from "@mui/material";
import UserContext from "../../store/user-context";

import styled from "@emotion/styled";

import { grey } from "@mui/material/colors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

import logo from "../../logo/yamaha.svg";
import avatar from "../../images/20210214_162132_.jpg";
import SearchArea from "../SearchArea";
import UserMenu from "../UserMenu";
import ProductsMenu from "../ProductsMenu";

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
  let navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const handleOpenUserMenu = (event) => {
    setavatarAnchorElement(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setavatarAnchorElement(null);
  };

  const handleLogoutUser = () => {
    setavatarAnchorElement(null);
    userCtx.onLoggout();
  };

  const handleloginUser = () => {
    // setisLoggedIn(true);
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
          height: "10vh",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ height: "60px", width: "120px" }}>
            <Link href="/">
              <img alt="" src={logo} />
            </Link>
          </Box>
          <SearchArea />
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {userCtx.isLoggedIn === true ? (
            <Box>
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Ehsan Mahmoudi" src={avatar}></Avatar>
              </IconButton>
              <UserMenu
                onCloseUserMenu={handleCloseUserMenu}
                onLogoutUser={handleLogoutUser}
                avatarAnchorEl={avatarAnchorElement}
              />
            </Box>
          ) : (
            <StyledButton variant="outlined" onClick={handleloginUser}>
              <LoginIcon sx={{ margin: "5px" }} />
              <Typography textAlign="center">ورود</Typography>
            </StyledButton>
          )}
          {userCtx.isLoggedIn === true && (
            <>
              <Divider orientation="vertical" sx={{ height: "2.5rem" }} />
              <IconButton onClick={handleCartIconClick}>
                <Badge badgeContent={userCtx.cartItems.length} color="warning">
                  <ShoppingCartIcon sx={{ margin: "5px" }} />
                </Badge>
              </IconButton>
            </>
          )}
        </Container>
      </Toolbar>
      <Toolbar
        sx={{
          backgroundColor: "#ffffff",
          margin: "0 30px",
        }}
      >
        <ProductsMenu />
      </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
