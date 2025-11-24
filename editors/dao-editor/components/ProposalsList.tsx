import type { Proposal } from "roxium-dao-ops/document-models/dao";
import { ProposalCard } from "./ProposalCard.js";

interface ProposalsListProps {
  proposals: Proposal[];
}

export function ProposalsList({ proposals }: ProposalsListProps) {
  if (proposals.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-4 text-sm font-semibold text-slate-900">
          No proposals
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Get started by creating your first proposal.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {proposals.map((proposal) => (
        <ProposalCard key={proposal.id} proposal={proposal} />
      ))}
    </div>
  );
}

