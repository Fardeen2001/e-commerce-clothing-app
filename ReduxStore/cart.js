import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = { items: [], totalAmount: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      let newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemCode === newItem.itemCode
      );
      if (!existingItem) {
        state.items.push({
          itemCode: newItem.itemCode,
          name: newItem.name,
          price: newItem.price,
          qty: 1,
          size: newItem.size,
          varient: newItem.varient,
          totalPrice: newItem.price,
        });
        state.totalAmount += newItem.price;
      } else {
        existingItem.qty++;
        existingItem.price += newItem.price;
        existingItem.totalAmount += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const itemCode = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemCode === itemCode
      );
      if (existingItem.qty === 1) {
        state.items = state.items.filter((item) => item.itemCode !== itemCode);
        state.totalAmount -= existingItem.price;
      } else {
        existingItem.qty--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalAmount -= existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
