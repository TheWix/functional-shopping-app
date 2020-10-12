import { createAction, ActionType } from "typesafe-actions";

export const addToCart = createAction("SHOPPING_CART/ADD_TO_CART")<number>();

export type CartAction = ActionType<typeof addToCart>;