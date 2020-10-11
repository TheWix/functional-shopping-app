import { ActionType } from "typesafe-actions";
import { createAction } from "typesafe-actions";
import { Product } from "../types";

const actions = {
  productsReceivedSuccessfully: createAction(
    "PRODUCT/PRODUCTS_RECEIVED_SUCCESSFULLY"
  )<Product[]>(),
};

export default actions;
export type ProductAction = ActionType<typeof actions>;
