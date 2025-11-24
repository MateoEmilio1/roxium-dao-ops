import { DocumentToolbar } from "@powerhousedao/design-system/connect/index";
import { useSelectedDaoDocument } from "roxium-dao-ops/document-models/dao";
import { DaoOverview } from "./components/DaoOverview.js";
import { ProposalsList } from "./components/ProposalsList.js";

/** Implement your editor behavior here */
export default function Editor() {
  const [daoDocument] = useSelectedDaoDocument();

  if (!daoDocument) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-slate-500">No DAO document selected</p>
        </div>
      </div>
    );
  }

  const { proposals } = daoDocument.state.global;

  return (
    <div className="min-h-screen bg-slate-50">
      <DocumentToolbar />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <DaoOverview />
        </div>
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Proposals</h2>
            <span className="text-sm text-slate-500">
              {proposals.length}{" "}
              {proposals.length === 1 ? "proposal" : "proposals"}
            </span>
          </div>
          <ProposalsList proposals={proposals} />
        </div>
      </div>
    </div>
  );
}
