import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FiltersSliceState {
  activeCategory: number;
  activeSortItem: number;
  currentPage: number;
  searchValue: string;
}

const initialState: FiltersSliceState = {
  activeCategory: 0,
  activeSortItem: 0,
  currentPage: 1,
  searchValue: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveCategory(state, { payload }: PayloadAction<number>) {
      state.activeCategory = payload;
    },
    setActiveSortItem(state, { payload }: PayloadAction<number>) {
      state.activeSortItem = payload;
    },
    setCurrentPage(state, { payload }: PayloadAction<number>) {
      state.currentPage = payload;
    },
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});

export const filtersSliceSelector = ({ filters }: RootState) => filters;

export const {
  setActiveCategory,
  setActiveSortItem,
  setCurrentPage,
  setSearchValue,
} = filtersSlice.actions;

export default filtersSlice.reducer;
