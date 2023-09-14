import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import openCart from "./openCart";

const store = configureStore({
  reducer: {
    cart: cart,
    toggleCart: openCart,
  },
});
export default store;
