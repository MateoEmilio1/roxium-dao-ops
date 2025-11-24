import type { DaoDaoOperationsOperations } from "roxium-dao-ops/document-models/dao";

export const daoDaoOperationsOperations: DaoDaoOperationsOperations = {
  setDaoNameOperation(state, action) {
    state.name = action.input.name;
  },
  setDescriptionOperation(state, action) {
    state.description = action.input.description || "";
  },
    updateDaoNameOperation(state, action) {
        // TODO: Implement "updateDaoNameOperation" reducer
        throw new Error('Reducer "updateDaoNameOperation" not yet implemented');
    },
    updateOperation(state, action) {
        // TODO: Implement "updateOperation" reducer
        throw new Error('Reducer "updateOperation" not yet implemented');
    },
    updateDaoDescriptionOperation(state, action) {
        // TODO: Implement "updateDaoDescriptionOperation" reducer
        throw new Error('Reducer "updateDaoDescriptionOperation" not yet implemented');
    }
};
