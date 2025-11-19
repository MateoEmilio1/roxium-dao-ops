import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the Todo List document type */
export const DaoEditor: EditorModule = {
  Component: lazy(() => import("./editor.js")),
  documentTypes: ["roxium-dao-ops/dao"],
  config: {
    id: "dao-editor",
    name: "DAOEditor",
  },
};
