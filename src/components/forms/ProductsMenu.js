import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { Menu, MenuItem, Typography } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import { Button } from "@mui/material";import PianoIcon from '@mui/icons-material/Piano';

const ProductsMenu = (props) => {
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
      >
        <MenuIcon sx={{ margin: "5px" }} />
        <Typography variant="h6">محصولات</Typography>
      </Button>
      <Menu>
        <MenuItem>
          <Typography color={grey[600]}>پیانو</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>کیبورد</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>گیتار کلاسیک</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>گیتار الکتریک</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>گیتار باس</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>ویالن</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>درامز</Typography>
        </MenuItem>
        <MenuItem>
          <Typography color={grey[600]}>ترومپت</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
export default ProductsMenu;
