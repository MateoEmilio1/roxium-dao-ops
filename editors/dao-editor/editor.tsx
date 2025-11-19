import { DocumentToolbar } from "@powerhousedao/design-system/connect/index";
import { EditDaoName } from "./components/EditName.js";

/** Implement your editor behavior here */
export default function Editor() {
  return (
    <div className="py-4 px-8">
      <DocumentToolbar />
      <EditDaoName />
    </div>
  );
}
