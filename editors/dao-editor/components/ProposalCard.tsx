import type { Proposal } from "roxium-dao-ops/document-models/dao";
import { TasksList } from "./TasksList.js";

interface ProposalCardProps {
  proposal: Proposal;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-900">
          {proposal.title}
        </h3>
        {proposal.description && (
          <p className="mt-2 text-sm text-slate-600">{proposal.description}</p>
        )}
      </div>
      <div className="mt-4 border-t border-slate-200 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Tasks ({proposal.tasks.length})
          </h4>
        </div>
        <TasksList tasks={proposal.tasks} />
      </div>
    </div>
  );
}

