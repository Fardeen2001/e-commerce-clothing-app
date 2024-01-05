import { createSlice } from "@reduxjs/toolkit";
const intialAuthState = {
  token: Boolean(window.localStorage.getItem("token")) || false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthState,
  reducers: {
    isLogin: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = true;
    },
    logout: (state) => {
      state.token = false;
      localStorage.removeItem("token");
    },
  },
});
export const authSliceAction = authSlice.actions;
export default authSlice.reducer;
