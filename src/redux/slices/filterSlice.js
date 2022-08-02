import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  activeSortItem: 0,
  currentPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveCategory(state, { payload }) {
      state.activeCategory = payload;
    },
    setActiveSortItem(state, { payload }) {
      state.activeSortItem = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
  },
});

export const { setActiveCategory, setActiveSortItem, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
