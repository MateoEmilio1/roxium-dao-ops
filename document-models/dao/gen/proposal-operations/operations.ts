import { type SignalDispatch } from "document-model";
import {
  type SetProposalNameAction,
  type SetProposalDescriptionAction,
} from "./actions.js";
import { type DaoState } from "../types.js";

export interface DaoProposalOperationsOperations {
  setProposalNameOperation: (
    state: DaoState,
    action: SetProposalNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setProposalDescriptionOperation: (
    state: DaoState,
    action: SetProposalDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
}
