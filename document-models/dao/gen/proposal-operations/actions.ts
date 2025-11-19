import { type Action } from "document-model";
import type {
  SetProposalNameInput,
  SetProposalDescriptionInput,
} from "../types.js";

export type SetProposalNameAction = Action & {
  type: "SET_PROPOSAL_NAME";
  input: SetProposalNameInput;
};
export type SetProposalDescriptionAction = Action & {
  type: "SET_PROPOSAL_DESCRIPTION";
  input: SetProposalDescriptionInput;
};

export type DaoProposalOperationsAction =
  | SetProposalNameAction
  | SetProposalDescriptionAction;
