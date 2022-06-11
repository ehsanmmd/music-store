import React, { useState } from "react";
import { productsList } from "../api/productApi";

const UserContext = React.createContext({
  isLoggedIn: false,
  cartItems: [],
  pushIntoCartItems: (id) => {},
  deleteFromCartItems: (id) => {},
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

  const pushIntoCartItemsHandler = (id) => { 
    
    var item = productsList.find((p) => p.uid === id);
    setCartItems((cartItems) => {
      return [...cartItems, item];
    });
  };

  const deleteFromCartItemsHandler = (uid) => {
    const selectedItemIndex = cartItems.findIndex((item) => item.uid === uid);
    setCartItems((cartItems) => {
      cartItems.splice(selectedItemIndex, 1);
      return cartItems;
    });
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        cartItems: cartItems,
        pushIntoCartItems: pushIntoCartItemsHandler,
        deleteFromCartItems: deleteFromCartItemsHandler,
        onLogin: loginHandler,
        onLoggout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
