import type { DaoDaoOperationsAction } from "./dao-operations/actions.js";
import type { DaoProposalOperationsAction } from "./proposal-operations/actions.js";
import type { DaoTaskOperationsAction } from "./task-operations/actions.js";

export * from "./dao-operations/actions.js";
export * from "./proposal-operations/actions.js";
export * from "./task-operations/actions.js";

export type DaoAction =
  | DaoDaoOperationsAction
  | DaoProposalOperationsAction
  | DaoTaskOperationsAction;
