export type CartItemType = {
  id: string;
  img: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  items: CartItemType[];
  totalCount: number;
  totalPrice: number;
}


