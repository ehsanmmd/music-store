import React, { useState } from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLoggout: () => {},
});

export const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLoggout: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
