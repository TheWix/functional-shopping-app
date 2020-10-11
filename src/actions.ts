import { ActionType } from "typesafe-actions";
import { createAction } from "typesafe-actions";
import { productActions } from "./entites";

const actions = {
  init: createAction("INIT")<void>(),
  error: createAction("ERROR")<Error>(),
  ...productActions,
};

export default actions;

export type Action = ActionType<typeof actions>;
