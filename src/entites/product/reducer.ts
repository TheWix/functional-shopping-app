import { Lens } from "monocle-ts";
import { getType } from "typesafe-actions";
import type { ProductAction } from "./actions";
import { Product } from "../types";
import * as actions from "./actions";

export type ProductState = {
  byId: { [index: number]: Product };
  allIds: number[];
};

const initialState: ProductState = {
  byId: {},
  allIds: [],
};

const toObject = <T, ST extends Extract<T, string>, K extends keyof ST>(
  key: K
) => (arr: T[]) =>
  arr.reduce((acc, t) => ({ ...acc, [(t as any)[key]]: t }), {});

export default (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case getType(actions.productsReceivedSuccessfully):
      // pipe(
      //   state,
      //   R.evolve({
      //     byId: flow(R.mergeRight(toObject("id")(action.payload))),
      //   })
      // );

      return {
        ...state,
        byId: pipe(
          action.payload,
          toObject("id"),
          R.mergeRight(state.byId)
        ),
        allIds: pipe(action.payload, R.pluck("id"), R.concat(state.allIds)),
      };
    default:
      return state;
  }
};

export const _byId = Lens.fromProp<ProductState>()("byId");
export const _allIds = Lens.fromProp<ProductState>()("allIds");

export const selectors = {
  getAllProducts: (state: ProductState) =>
    pipe(
      state,
      _allIds.get,
      A.map((id) => _byId.get(state)[id])
    ),
  getById: (state: ProductState) => (id: number) =>
    pipe(id, (x) => state.byId[x], O.fromNullable),
};
