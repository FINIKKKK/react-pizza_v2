export type CartItem = {
  id: string;
  img: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
}
