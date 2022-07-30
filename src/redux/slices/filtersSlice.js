import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  activeSortItem: 0,
  currentPage: 1,
};

export const filtersSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setActiveSortItem(state, action) {
      state.activeSortItem = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setUrlFilters(state, action) {
      state.activeCategory = Number(action.payload.activeCategory);
      state.activeSortItem = Number(action.payload.activeSortItem);
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const {
  setActiveCategory,
  setActiveSortItem,
  setCurrentPage,
  setUrlFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
