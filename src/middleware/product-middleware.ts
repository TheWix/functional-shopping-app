import { Middleware } from "@reduxjs/toolkit";
import { constVoid } from "fp-ts/lib/function";
import { getType } from "typesafe-actions";
import { Action, default as actions } from "../actions";
import { Product } from "../entites";
import { RootState } from "../state";

const getProducts = () =>
  Promise.resolve(
    E.right<Error, Product[]>([
      {
        id: 1,
        name: "Test Product 1",
        description: "A test product!!",
        price: 2.0,
      },
      {
        id: 2,
        name: "Test Product 2",
        description: "A test product number 2!!",
        price: 3.0,
      },
    ])
  );

export const productMiddleware: Middleware<{}, RootState> = (store) => (
  next
) => async (action: Action) => {
  next(action);

  const dispatchError = flow(actions.error, store.dispatch, constVoid);

  switch (action.type) {
    case getType(actions.init): {
      const products = await getProducts();

      const createNewProducts = flow(
        actions.productsReceivedSuccessfully,
        store.dispatch,
        constVoid
      );

      pipe(
        products,
        E.fold(dispatchError, (p) => {
          store.dispatch(actions.productsReceivedSuccessfully(p));
        })
      );
    }
  }
};
