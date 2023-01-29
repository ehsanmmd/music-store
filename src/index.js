import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import store from "./store/index";
import "./index.css";
import App from "./App";

import theme from "./theme";

ReactDOM.render(
  <Auth0Provider
    domain="emmd.us.auth0.com"
    clientId="47x6Adono3IDwNacrgmYgOgyaAAVfrI5"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
