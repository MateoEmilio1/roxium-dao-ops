import { type SignalDispatch } from "document-model";
import { type SetDaoNameAction, type SetDescriptionAction } from "./actions.js";
import { type DaoState } from "../types.js";

export interface DaoDaoOperationsOperations {
  setDaoNameOperation: (
    state: DaoState,
    action: SetDaoNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDescriptionOperation: (
    state: DaoState,
    action: SetDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
}
