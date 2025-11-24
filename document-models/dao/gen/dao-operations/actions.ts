import { type Action } from "document-model";
import type {
  SetDaoNameInput,
  SetDescriptionInput,
  UpdateDaoNameInput,
  UpdateDaoDescriptionInput,
} from "../types.js";

export type SetDaoNameAction = Action & {
  type: "SET_DAO_NAME";
  input: SetDaoNameInput;
};
export type SetDescriptionAction = Action & {
  type: "SET_DESCRIPTION";
  input: SetDescriptionInput;
};
export type UpdateDaoNameAction = Action & {
  type: "UPDATE_DAO_NAME";
  input: UpdateDaoNameInput;
};
export type UpdateDaoDescriptionAction = Action & {
  type: "UPDATE_DAO_DESCRIPTION";
  input: UpdateDaoDescriptionInput;
};

export type DaoDaoOperationsAction =
  | SetDaoNameAction
  | SetDescriptionAction
  | UpdateDaoNameAction
  | UpdateDaoDescriptionAction;
