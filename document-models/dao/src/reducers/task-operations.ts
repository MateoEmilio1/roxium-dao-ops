import type { DaoTaskOperationsOperations } from "roxium-dao-ops/document-models/dao";

export const daoTaskOperationsOperations: DaoTaskOperationsOperations = {
  setTaskNameOperation(state, action) {
    state.name = action.input.name;
  },
  setTaskDescriptionOperation(state, action) {
    state.description = action.input.description || "";
  },
};
