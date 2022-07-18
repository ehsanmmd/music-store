import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../api/productApi";

const initialUserState = { isLoggedIn: false, cartItems: [] };

const onLogin = (state) => {
  state.isLoggedIn = true;
  console.log("in user slice");
  console.log(state.isLoggedIn);
};

const onLoggout = (state) => {
  state.isLoggedIn = false;
  state.cartItems = [];
};

const pushIntoCartItems = (state, action) => {
  var item = productsList.find((p) => p.uid === action.payload);
  const index = state.cartItems.findIndex(
    (element) => element.uid === action.payload
  );
  if (index >= 0) {
    if (state.cartItems[index].qty !== undefined) {
      state.cartItems[index].qty++;

      state.cartItems = [...state.cartItems, item];
    } else {
      state.cartItems[index].qty = 1;
    }
  }
  state.cartItems = [...state.cartItems, item];
};

const deleteFromCartItems = (state, action) => {
  state.cartItems = state.cartItems.filter(
    (item) => item.uid !== action.payload
  );
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    pushIntoCartItems,
    deleteFromCartItems,
    onLogin,
    onLoggout,
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
