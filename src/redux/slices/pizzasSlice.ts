import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type PizzaItems = {
  id: string;
  img: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

interface PizzasSliseState {
  items: PizzaItems[];
  status: "loading" | "success" | "error";
}

const sortLabels = ["rating", "price", "name"];

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async ({ activeCategory, activeSortItem, currentPage, searchValue }) => {
    const { data } = await axios.get(
      `https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas?page=${currentPage}&limit=4&search=${searchValue}&${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&sortBy=${sortLabels[activeSortItem]}&order=${
        activeSortItem === 2 ? "asc" : "desc"
      }`
    );
    return data;
  }
);

const initialState: PizzasSliseState = {
  items: [],
  status: "loading", // loading, success, error
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, { payload }) {
      state.items = payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.items = payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
