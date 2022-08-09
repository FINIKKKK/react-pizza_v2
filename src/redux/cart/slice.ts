import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartLS, getTotalCountLS, getTotalPriceLS } from "../../utils/getCartLS";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = {
  items: getCartLS().items,
  totalCount: getCartLS().totalCount,
  totalPrice: getCartLS().totalPrice,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<CartItem>) {
      const findItem = state.items.find((item) => item.id === payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...payload,
          count: 1,
        });
      }

      state.totalCount = getTotalCountLS(state.items);
      state.totalPrice = getTotalPriceLS(state.items);
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== payload);
      state.totalCount = getTotalCountLS(state.items);
      state.totalPrice = getTotalPriceLS(state.items);
    },
    minusItem(state, { payload }: PayloadAction<CartItem>) {
      const findItem = state.items.find((item) => item.id === payload.id);

      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice -= payload.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
