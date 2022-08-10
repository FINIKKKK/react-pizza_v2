import { CartItemType } from "../redux/cart/types";

export const getTotalPriceLS = (items: CartItemType[]) => {
  return items.reduce((sum, item) => item.price * item.count + sum, 0);
};

export const getTotalCountLS = (items: CartItemType[]) => {
  return items.reduce((sum, item) => item.count + sum, 0);
};

export const getCartLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPriceLS(items);
  const totalCount = getTotalCountLS(items);

  return {
    items,
    totalPrice,
    totalCount,
  };
};
