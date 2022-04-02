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
  Menu,
  MenuItem,
} from "@mui/material";

import styled from "@emotion/styled";

import { grey } from "@mui/material/colors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import logo from "../../logo/yamaha.svg";
import avatar from "../../images/20210214_162132_.jpg";
import SearchArea from "../forms/SearchArea";


const StyledButton = styled(Button)(({ theme }) => ({
  margin: "15px",
  color: grey[600],
  borderColor: grey[600],
  "&:hover": {
    backgroundColor: grey[200],
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
    <Box sx={{ position: "fixed" }}>
      <AppBar sx={{ boxShadow: 0 }}>
        <Toolbar
          sx={{
            backgroundColor: "#ffffff",
            height: "10vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            <Box sx={{ height: "100%", margin: "10px" }}>
              <Link href="#">
                <img src={logo} alt="" height="100%" />
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
                <Menu
                  open={Boolean(avatarAnchorElement)}
                  keepMounted
                  anchorEl={avatarAnchorElement}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem divider>
                    <PermIdentityIcon sx={{ ml: "10px" }} />
                    <Typography color={grey[600]}>پروفایل</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogoutUser}>
                    <LogoutIcon sx={{ ml: "10px" }} />
                    <Typography color={grey[600]}>خروج</Typography>
                  </MenuItem>
                </Menu>
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
      </AppBar>
    </Box>
  );
};
export default MainHeader;
