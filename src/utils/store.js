import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
