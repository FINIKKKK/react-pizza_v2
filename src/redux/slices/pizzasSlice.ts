import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type PizzaItem = {
  id: string;
  img: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

type FetchParams = {
  activeCategory: number;
  activeSortItem: number;
  currentPage: number;
  searchValue: string;
};

interface PizzasSliseState {
  items: PizzaItem[];
  status: "loading" | "success" | "error";
}

const sortLabels = ["rating", "price", "name"];

export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchParams>(
  "pizzas/fetchPizzasStatus",
  async ({ activeCategory, activeSortItem, currentPage, searchValue }) => {
    const { data } = await axios.get<PizzaItem[]>(
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
    setPizzas(state, { payload }: PayloadAction<PizzaItem[]>) {
      state.items = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.items = payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const pizzasSliceSelector = ({pizzas}: RootState)  => pizzas

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
