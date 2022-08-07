import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import filters from "./filters/slice";
import cart from "./cart/slice";
import pizzas from "./pizzas/slice";

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
