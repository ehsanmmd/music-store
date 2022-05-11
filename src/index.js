import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./store/user-context";

import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
