import { RootState } from "../store";

export const filtersSliceSelector = ({ filters }: RootState) => filters;
export const activeCategorySelector = ({ filters }: RootState) =>
  filters.activeCategory;
export const activeSortSelector = ({ filters }: RootState) =>
  filters.activeSortItem;
