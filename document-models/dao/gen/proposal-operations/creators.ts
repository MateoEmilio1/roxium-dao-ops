import { createAction } from "document-model/core";
import {
  SetProposalNameInputSchema,
  SetProposalDescriptionInputSchema,
} from "../schema/zod.js";
import type {
  SetProposalNameInput,
  SetProposalDescriptionInput,
} from "../types.js";
import type {
  SetProposalNameAction,
  SetProposalDescriptionAction,
} from "./actions.js";

export const setProposalName = (input: SetProposalNameInput) =>
  createAction<SetProposalNameAction>(
    "SET_PROPOSAL_NAME",
    { ...input },
    undefined,
    SetProposalNameInputSchema,
    "global",
  );

export const setProposalDescription = (input: SetProposalDescriptionInput) =>
  createAction<SetProposalDescriptionAction>(
    "SET_PROPOSAL_DESCRIPTION",
    { ...input },
    undefined,
    SetProposalDescriptionInputSchema,
    "global",
  );
