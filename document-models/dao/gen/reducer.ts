// TODO: remove eslint-disable rules once refactor is done
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model/core";
import type { DaoPHState } from "roxium-dao-ops/document-models/dao";

import { daoDaoOperationsOperations } from "../src/reducers/dao-operations.js";
import { daoProposalOperationsOperations } from "../src/reducers/proposal-operations.js";
import { daoTaskOperationsOperations } from "../src/reducers/task-operations.js";

import {
  SetDaoNameInputSchema,
  SetDescriptionInputSchema,
  SetProposalNameInputSchema,
  SetProposalDescriptionInputSchema,
  SetTaskNameInputSchema,
  SetTaskDescriptionInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<DaoPHState> = (state, action, dispatch) => {
  if (isDocumentAction(action)) {
    return state;
  }

  switch (action.type) {
    case "SET_DAO_NAME":
      SetDaoNameInputSchema().parse(action.input);
      daoDaoOperationsOperations.setDaoNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "SET_DESCRIPTION":
      SetDescriptionInputSchema().parse(action.input);
      daoDaoOperationsOperations.setDescriptionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "SET_PROPOSAL_NAME":
      SetProposalNameInputSchema().parse(action.input);
      daoProposalOperationsOperations.setProposalNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "SET_PROPOSAL_DESCRIPTION":
      SetProposalDescriptionInputSchema().parse(action.input);
      daoProposalOperationsOperations.setProposalDescriptionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "SET_TASK_NAME":
      SetTaskNameInputSchema().parse(action.input);
      daoTaskOperationsOperations.setTaskNameOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    case "SET_TASK_DESCRIPTION":
      SetTaskDescriptionInputSchema().parse(action.input);
      daoTaskOperationsOperations.setTaskDescriptionOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );
      break;

    default:
      return state;
  }
};

export const reducer = createReducer<DaoPHState>(stateReducer);
