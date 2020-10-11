import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { StateType } from "typesafe-actions";
import { reducer } from "./entites";
import { productMiddleware } from "./middleware/product-middleware";
import { Lens } from "monocle-ts";
import actions from "./actions";

export const store = configureStore({
  reducer: reducer,
  middleware: [productMiddleware],
});

//export type AppDispatch = typeof store.dispatch;
export type RootState = StateType<typeof reducer>;

export const lens = {
  products: Lens.fromProp<RootState>()("product"),
};
