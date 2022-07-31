import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filtersSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filters,
    cart,
  },
});
