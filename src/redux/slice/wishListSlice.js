import { createSlice } from "@reduxjs/toolkit";

export const WsihlistSlice = createSlice({
  name: "wishlist",
  initialState: JSON.parse(localStorage.getItem("wishlist")) || [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state));
    },
    removeToWishlist: (state, action) => {
      const id = state.findIndex((item) => item.id === action.payload);
      state.splice(id, 1);
      localStorage.removeItem("wishlist", state);
    },
  },
});

export const { addToWishlist, removeToWishlist } = WsihlistSlice.actions;

export default WsihlistSlice.reducer;
