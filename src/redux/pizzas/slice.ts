import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { sortList } from "../../components/Sort";
import { FetchParams, PizzaItemType, PizzasSliseState, PizzaStatus } from "./types";

export const fetchPizzas = createAsyncThunk<PizzaItemType[], FetchParams>(
  "pizzas/fetchPizzasStatus",
  async ({ activeCategory, activeSortItem, currentPage, searchValue }) => {
    const { data } = await axios.get<PizzaItemType[]>(
      `https://62dbdd5d57ac3c3f3c5055d6.mockapi.io/pizzas?page=${currentPage}&limit=12&search=${searchValue}&${
        activeCategory > 0 ? `category=${activeCategory}` : ""
      }&sortBy=${sortList[activeSortItem].value}&order=${
        activeSortItem === 2 ? "asc" : "desc"
      }`
    );
    return data;
  }
);

const initialState: PizzasSliseState = {
  items: [],
  status: PizzaStatus.LOADING,
  activeItem: {
    id: "",
    img: "",
    title: "",
    price: 0,
    types: [],
    sizes: [],
  },
  openPizzaPopup: false,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, { payload }: PayloadAction<PizzaItemType[]>) {
      state.items = payload;
    },
    setActivePizza(state, { payload }: PayloadAction<PizzaItemType>) {
      state.activeItem = payload;
      state.openPizzaPopup = true;
    },
    closePizzaPopup(state) {
      state.openPizzaPopup = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = PizzaStatus.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, { payload }) => {
      state.status = PizzaStatus.SUCCESS;
      state.items = payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = PizzaStatus.ERROR;
      state.items = [];
    });
  },
});

export const { setPizzas, setActivePizza, closePizzaPopup } =
  pizzasSlice.actions;

export default pizzasSlice.reducer;