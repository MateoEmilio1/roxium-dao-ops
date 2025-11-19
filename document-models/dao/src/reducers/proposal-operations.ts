import type { DaoProposalOperationsOperations } from "roxium-dao-ops/document-models/dao";

export const daoProposalOperationsOperations: DaoProposalOperationsOperations =
  {
    setProposalNameOperation(state, action) {
      state.name = action.input.name;
    },
    setProposalDescriptionOperation(state, action) {
      state.description = action.input.description || "";
    },
  };
