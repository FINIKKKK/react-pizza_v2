import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterSliceState {
  activeCategory: number,
  activeSortItem: number,
  currentPage: number,
  searchValue: string,
}

const initialState: FilterSliceState = {
  activeCategory: 0,
  activeSortItem: 0,
  currentPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
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

export const { setActiveCategory, setActiveSortItem, setCurrentPage, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
