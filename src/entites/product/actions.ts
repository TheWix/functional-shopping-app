import { ActionType } from "typesafe-actions";
import { createAction } from "typesafe-actions";
import { Product } from "../types";


export const productsReceivedSuccessfully = createAction(
  "PRODUCT/PRODUCTS_RECEIVED_SUCCESSFULLY"
)<Product[]>();


export type ProductAction = ActionType<typeof productsReceivedSuccessfully>;
