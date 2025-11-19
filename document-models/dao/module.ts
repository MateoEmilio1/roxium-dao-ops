import type { DocumentModelModule } from "document-model";
import { createState } from "document-model";
import { defaultBaseState } from "document-model/core";
import type { DaoPHState } from "roxium-dao-ops/document-models/dao";
import {
  actions,
  documentModel,
  reducer,
  utils,
} from "roxium-dao-ops/document-models/dao";

/** Document model module for the Todo List document type */
export const Dao: DocumentModelModule<DaoPHState> = {
  reducer,
  actions,
  utils,
  documentModel: createState(defaultBaseState(), documentModel),
};
