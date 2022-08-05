import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = {
  id: string;
  img: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
};

interface CartSliceState {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
}

const initialState: CartSliceState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
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

      state.totalCount++;
      state.totalPrice += payload.price;
    },
    removeItem(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== payload);
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

export const cartSliceSelector = ({ cart }: RootState) => cart;

export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
