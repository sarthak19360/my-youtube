import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "App",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, hideMenu } = appSlice.actions;
export default appSlice;
