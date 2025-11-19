import type { EditorModule } from "document-model";
import { DaoEditor } from "./dao-editor/module.js";

export const editors: EditorModule[] = [
  DaoEditor,
];
