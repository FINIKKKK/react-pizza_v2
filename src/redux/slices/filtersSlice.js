import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  activeSortItem: 0,
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
  },
});

export const { setActiveCategory, setActiveSortItem } = filtersSlice.actions;

export default filtersSlice.reducer;
