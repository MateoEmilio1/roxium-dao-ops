import { type Action } from "document-model";
import type { SetDaoNameInput, SetDescriptionInput } from "../types.js";

export type SetDaoNameAction = Action & {
  type: "SET_DAO_NAME";
  input: SetDaoNameInput;
};
export type SetDescriptionAction = Action & {
  type: "SET_DESCRIPTION";
  input: SetDescriptionInput;
};

export type DaoDaoOperationsAction = SetDaoNameAction | SetDescriptionAction;
