import { type Action } from "document-model";
import type { SetTaskNameInput, SetTaskDescriptionInput } from "../types.js";

export type SetTaskNameAction = Action & {
  type: "SET_TASK_NAME";
  input: SetTaskNameInput;
};
export type SetTaskDescriptionAction = Action & {
  type: "SET_TASK_DESCRIPTION";
  input: SetTaskDescriptionInput;
};

export type DaoTaskOperationsAction =
  | SetTaskNameAction
  | SetTaskDescriptionAction;
