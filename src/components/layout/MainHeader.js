import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  Container,
  Link,
  IconButton,
  Divider,
  Button,
  Typography,
  alpha,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import styled from "@emotion/styled";

import { grey } from "@mui/material/colors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import logo from "../../logo/yamaha.svg";
import avatar from "../../images/20210214_162132_.jpg";
import { Logout } from "@mui/icons-material";
import { minWidth } from "@mui/system";

const settings = ["پروفایل", "خروج"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: grey[800],
  backgroundColor: alpha(grey[400], 0.25),
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

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
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: grey[800] }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="جستجو..." />
            </Search>
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
