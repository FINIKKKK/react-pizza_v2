export type PizzaItemType = {
  id: string;
  img: string;
  title: string;
  price: number;
  types: number[];
  sizes: number[];
};

export type FetchParams = {
  activeCategory: number;
  activeSortItem: number;
  currentPage: number;
  searchValue: string;
};

export interface PizzasSliseState {
  items: PizzaItemType[];
  status: PizzaStatus;
  activeItem: PizzaItemType;
  openPizzaPopup: boolean,
}

export enum PizzaStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
