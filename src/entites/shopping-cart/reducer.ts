import { ShoppingCart } from "../types";

const initialState = {
  currtent: {} as ShoppingCart,
  allIds: [] as number[],
};

export type ShoppingCartState = typeof initialState;

export default (
  state: ShoppingCartState = initialState,
  action: any
): ShoppingCartState => {
  return state;
};
