import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, { payload }) {
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
    removeItem(state, { payload }) {
      state.items = state.items.filter((obj) => obj.id !== payload);
    },
    minusItem(state, { payload }) {
      const findItem = state.items.find((item) => item.id === payload.id);

      if (findItem.count > 1) {
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
