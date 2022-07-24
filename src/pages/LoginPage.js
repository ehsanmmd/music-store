import { Box, TextField, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import GreyButton from "../components/GreyButton";
import { useState } from "react";

import { userActions } from "../store/user";
import { useDispatch } from "react-redux";

const BoxLoginStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  textAlign: "center",
  padding: "1rem",
  margin: "auto",
  border: `solid 1px #bbbbbb`,
}));

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
      dispatch(userActions.onLogin());
      window.history.back();
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" marginTop="5rem">
      <Grid item xs={10} sm={6} md={5} lg={4} xl={3}>
        <BoxLoginStyle sx={{ bgColor: grey[800] }}>
          <Grid container direction="column">
            <Grid item>
              <TextField
                type="text"
                label="نام کاربری"
                onChange={handleUsernameChange}
                sx={{
                  margin: "0.5rem",
                  direction: "ltr",
                  width: "80%",
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="کلمه عبور"
                onChange={handlePasswordChange}
                sx={{
                  margin: "0.5rem",
                  direction: "ltr",
                  width: "80%",
                }}
              />
            </Grid>
            <Grid item>
              <GreyButton
                variant="outlined"
                width="7rem"
                onClick={handleSubmitClick}
              >
                ورود
              </GreyButton>
            </Grid>
          </Grid>
        </BoxLoginStyle>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
