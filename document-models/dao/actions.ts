import { baseActions } from "document-model";
import {
  daoOperationsActions,
  proposalOperationsActions,
  taskOperationsActions,
} from "./gen/creators.js";

/** Actions for the Dao document model */
export const actions = {
  ...baseActions,
  ...daoOperationsActions,
  ...proposalOperationsActions,
  ...taskOperationsActions,
};
