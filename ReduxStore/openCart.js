import { createSlice } from "@reduxjs/toolkit";
const openCartInitialState = {
  isCartOpen: false,
};
const openCartState = createSlice({
  name: "ToggleCart",
  initialState: openCartInitialState,
  reducers: {
    togleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const toggleCartActions = openCartState.actions;
export default openCartState.reducer;
