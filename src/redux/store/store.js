import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../slice/wishListSlice.js";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
