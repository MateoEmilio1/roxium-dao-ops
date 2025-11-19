import { type SignalDispatch } from "document-model";
import {
  type SetTaskNameAction,
  type SetTaskDescriptionAction,
} from "./actions.js";
import { type DaoState } from "../types.js";

export interface DaoTaskOperationsOperations {
  setTaskNameOperation: (
    state: DaoState,
    action: SetTaskNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setTaskDescriptionOperation: (
    state: DaoState,
    action: SetTaskDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
}
