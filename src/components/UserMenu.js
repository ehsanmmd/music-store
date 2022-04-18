
import { grey } from "@mui/material/colors";

import { Typography, MenuItem, Menu } from "@mui/material";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = (props) => {

  return (
    <Menu
      open={Boolean(props.avatarAnchorEl)}
      keepMounted
      anchorEl={props.avatarAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={props.onCloseUserMenu}
    >
      <MenuItem divider>
        <PermIdentityIcon sx={{ ml: "10px" }} />
        <Typography color={grey[600]}>پروفایل</Typography>
      </MenuItem>
      <MenuItem onClick={props.onLogoutUser}>
        <LogoutIcon sx={{ ml: "10px" }} />
        <Typography color={grey[600]}>خروج</Typography>
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
