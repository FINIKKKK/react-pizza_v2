import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filters from "./slices/filtersSlice";
import cart from "./slices/cartSlice";
import pizzas from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    filters,
    cart,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
