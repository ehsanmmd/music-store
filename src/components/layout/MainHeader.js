import { useState } from "react";
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
} from "@mui/material";

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
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [avatarAnchorElement, setavatarAnchorElement] = useState(null);

  const handleOpenUserMenu = (event) => {
    setavatarAnchorElement(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setavatarAnchorElement(null);
  };

  const handleLogoutUser = () => {
    setisLoggedIn(false);
    setavatarAnchorElement(null);
  };

  const handleloginUser = () => {
    setisLoggedIn(true);
    setavatarAnchorElement(null);
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
          <Box sx={{ height: "60px", width: "120px"}}>
            <Link href="/">
              <img src={logo} />
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
          {isLoggedIn ? (
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

          <Divider orientation="vertical" sx={{ height: "2.5rem" }} />
          <IconButton>
            <ShoppingCartIcon sx={{ margin: "5px" }} />
          </IconButton>
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
