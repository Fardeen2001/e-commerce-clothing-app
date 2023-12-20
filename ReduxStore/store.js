import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import openCart from "./openCart";
import auth from "./auth";

const store = configureStore({
  reducer: {
    cart: cart,
    toggleCart: openCart,
    auth: auth,
  },
});
export default store;
