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

const getTotalPriceLS = (items: CartItem[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
};

const getTotalCountLS = (items: CartItem[]) => {
  return items.reduce((sum, item) => item.count + sum, 0);
};

const getCartLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPriceLS(items);
  const totalCount = getTotalCountLS(items);

  return {
    items,
    totalPrice,
    totalCount,
  };
};

const cartItems = getCartLS();

const initialState: CartSliceState = {
  items: cartItems.items,
  totalCount: cartItems.totalCount,
  totalPrice: cartItems.totalPrice,
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
