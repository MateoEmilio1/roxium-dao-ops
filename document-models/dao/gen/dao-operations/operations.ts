import { type SignalDispatch } from "document-model";
import {
  type SetDaoNameAction,
  type SetDescriptionAction,
  type UpdateDaoNameAction,
  type UpdateDaoDescriptionAction,
} from "./actions.js";
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
  updateDaoNameOperation: (
    state: DaoState,
    action: UpdateDaoNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateDaoDescriptionOperation: (
    state: DaoState,
    action: UpdateDaoDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
}
