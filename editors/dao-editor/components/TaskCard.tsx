import type { Task } from "roxium-dao-ops/document-models/dao";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-slate-900 truncate">
            {task.title}
          </h4>
          {task.description && (
            <p className="mt-1 text-xs text-slate-600 line-clamp-2">
              {task.description}
            </p>
          )}
        </div>
        {task.budget !== null && (
          <div className="flex-shrink-0">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              ${task.budget.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
