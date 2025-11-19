import type { DocumentModelModule } from "document-model";
import { Dao } from "./dao/module.js";

export const documentModels: DocumentModelModule<any>[] = [Dao];
