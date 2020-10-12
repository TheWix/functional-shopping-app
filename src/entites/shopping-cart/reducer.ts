import type { CartAction } from "./actions";
import * as actions from "./actions";
import { getType } from "typesafe-actions";
import { Lens } from "monocle-ts";
import { get } from "../../utilities";

type ShoppingCartItem = {
  productId: number;
  quantity: number;
}

type CartState = {
  items: { [index: number]: ShoppingCartItem },
  allIds: number[];
}

const _items = Lens.fromProp<CartState>()("items");

const initialState: CartState = {
  items: {},
  allIds: []
};

export type ShoppingCartState = typeof initialState;

export default (
  state: ShoppingCartState = initialState,
  action: CartAction
): ShoppingCartState => {
  switch(action.type){
    case getType(actions.addToCart):
      pipe(state.items, get(action.payload), O.map(R.evolve({ quantity: R.add(1)})), O.getOrElse({...state, items: {...state.items, }}))
     
    default:
      return state;
  }
};
