import { Box, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import GreyButton from "../components/GreyButton";
import { useState, useContext } from "react";
import UserContext from "../store/user-context";

const BoxLoginStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textAlign: "center",
  padding: "1rem",
  width: "40%",
  height: "fitContent",
  margin: "auto",
  border: `solid 1px #bbbbbb`,
}));

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userCtx = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitClick = (event) => {
    if (
      username.trim().toLowerCase() === "ehsan" &&
      password.trim() === "1234"
    ) {
      userCtx.onLogin();
      window.history.back();
    }
  };

  return (
    <BoxLoginStyle sx={{ bgColor: grey[800] }}>
      <TextField
        type="text"
        label="نام کاربری"
        onChange={handleUsernameChange}
        sx={{
          margin: "0.5rem",
          direction: "ltr",
          width: "20rem",
        }}
      />
      <br />
      <TextField
        type="password"
        label="کلمه عبور"
        onChange={handlePasswordChange}
        sx={{
          margin: "0.5rem",
          direction: "ltr",
          width: "20rem",
        }}
      />
      <br />
      <GreyButton variant="outlined" width="7rem" onClick={handleSubmitClick}>
        ورود
      </GreyButton>
    </BoxLoginStyle>
  );
};
export default LoginPage;
