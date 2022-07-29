import { configureStore } from "@reduxjs/toolkit";
import filters from "./slices/filtersSlice";
import pagination from "./slices/paginationSlice";

export const store = configureStore({
  reducer: {
    filters,
    pagination,
  },
});
