import { ActionType } from "typesafe-actions";
import { createAction } from "typesafe-actions";
import { productActions, shoppingCartActions } from "./entites";

const actions = {
  init: createAction("INIT")<void>(),
  error: createAction("ERROR")<Error>(),
  ...productActions,
  ...shoppingCartActions
};

export default actions;

export type Action = ActionType<typeof actions>;
