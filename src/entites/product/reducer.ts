import { Lens } from "monocle-ts";
import { getType } from "typesafe-actions";
import { Action } from "../../actions";
import { Product } from "../types";
import actions from "./actions";

export type ProductState = {
  products: { [index: number]: Product };
  allIds: number[];
};

const initialState: ProductState = {
  products: {},
  allIds: [],
};

const toObject = <T, ST extends Extract<T, string>, K extends keyof ST>(
  key: K
) => (arr: T[]) =>
  arr.reduce((acc, t) => ({ ...acc, [(t as any)[key]]: t }), {});

export default (
  state: ProductState = initialState,
  action: Action
): ProductState => {
  switch (action.type) {
    case getType(actions.productsReceivedSuccessfully):
      pipe(
        state,
        R.evolve({
          products: flow(R.mergeRight(toObject("id")(action.payload))),
        })
      );

      return {
        ...state,
        products: pipe(
          action.payload,
          toObject("id"),
          R.mergeRight(state.products)
        ),
        allIds: pipe(action.payload, R.pluck("id"), R.difference(state.allIds)),
      };
  }
  return state;
};

export const _products = Lens.fromProp<ProductState>()("products");
export const _allIds = Lens.fromProp<ProductState>()("allIds");

export const selectors = {
  getAllProducts: (state: ProductState) =>
    pipe(
      state,
      _allIds.get,
      A.map((id) => _products.get(state)[id])
    ),
  getById: (state: ProductState) => (id: number) =>
    pipe(id, (x) => state.products[x], O.fromNullable),
};
