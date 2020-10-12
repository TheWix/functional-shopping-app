import { combineReducers } from "redux";
import { default as shoppingCartReducer } from "./shopping-cart/reducer";
import { default as productReducer } from "./product/reducer";
import * as productActions from "./product/actions";
import * as shoppingCartActions from "./shopping-cart/actions";

export const reducer = combineReducers({
  shoppingCart: shoppingCartReducer,
  product: productReducer,
});

export type { Product, ShoppingCart } from "./types";

export { selectors as productSelectors } from "./product/reducer";

export { productActions, shoppingCartActions }