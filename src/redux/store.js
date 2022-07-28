import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filtersSlice";

export const store = configureStore({
  reducer: {
    filters,
  },
});
