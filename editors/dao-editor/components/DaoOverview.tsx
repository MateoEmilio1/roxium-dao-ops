// editors/dao-editor/components/DaoOverview.tsx
import { useState, type FormEventHandler } from "react";
import {
  useSelectedDaoDocument,
  setDaoName,
  setDescription,
} from "roxium-dao-ops/document-models/dao";

export function DaoOverview() {
  const [daoDocument, dispatch] = useSelectedDaoDocument();
  const [isEditing, setIsEditing] = useState(false);

  if (!daoDocument) return null;

  const { name, description } = daoDocument.state.global;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const descInput = form.elements.namedItem(
      "description"
    ) as HTMLTextAreaElement;

    dispatch(setDaoName({ name: nameInput.value }));
    dispatch(setDescription({ description: descInput.value || "" }));

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <section className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-slate-900">
          DAO details
        </h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label
              className="text-xs font-medium text-slate-600"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              defaultValue={name}
              className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-xs font-medium text-slate-600"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description ?? ""}
              rows={3}
              className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-xs font-medium text-slate-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-slate-800"
            >
              Save changes
            </button>
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className="rounded-xl border bg-white p-5 shadow-sm flex items-start justify-between gap-4">
      <div>
        <h2 className="text-base font-semibold text-slate-900">{name}</h2>
        {description && (
          <p className="mt-1 max-w-xl text-sm text-slate-600">{description}</p>
        )}
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="text-xs font-medium text-slate-600 hover:text-slate-900"
      >
        Edit
      </button>
    </section>
  );
}
