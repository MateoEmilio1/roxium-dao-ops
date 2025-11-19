import type { DaoDaoOperationsOperations } from "roxium-dao-ops/document-models/dao";

export const daoDaoOperationsOperations: DaoDaoOperationsOperations = {
  setDaoNameOperation(state, action) {
    state.name = action.input.name;
  },
  setDescriptionOperation(state, action) {
    state.description = action.input.description || "";
  },
};
