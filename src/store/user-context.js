import React, { useState } from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  cartItems: [],
  pushIntoCartItems: () => {},
  onLogin: (email, password) => {},
  onLoggout: () => {},
});

export const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [cartItems, setCartItems] = useState([]);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const pushIntoCartItemsHandler = (item) => {
    setCartItems((cartItems) => {
      return [...cartItems, item];
    });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        cartItems: cartItems,
        pushIntoCartItems: pushIntoCartItemsHandler,
        onLogin: loginHandler,
        onLoggout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
