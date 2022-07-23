import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled, InputBase } from "@mui/material";

import { grey } from "@mui/material/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  marginRight: theme.spacing(2),
  marginLeft: 0,
  // width: "100%",
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
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
  display: "block",
  color: grey[800],
  backgroundColor: alpha(grey[400], 0.25),
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create("width"),
    // Width: "30rem",
    // [theme.breakpoints.up("md")]: {
    //   width: "40ch",
    // },
  },
}));

const SearchArea = (props) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: grey[800] }} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="جستجو..." />
    </Search>
  );
};
export default SearchArea;
