import { setName } from "document-model";
import type { FormEventHandler, MouseEventHandler } from "react";
import { useState } from "react";
import {
  setDaoName,
  useSelectedDaoDocument,
} from "roxium-dao-ops/document-models/dao";

/** Displays the name of the selected Dao document and allows editing it */
export function EditDaoName() {
  const [daoDocument, dispatch] = useSelectedDaoDocument();
  const [isEditing, setIsEditing] = useState(false);

  if (!daoDocument) return null;

  const daoDocumentName = daoDocument.state.global.name;
  console.log(daoDocument.operations.global);

  const onClickEditDaoName: MouseEventHandler<HTMLButtonElement> = () => {
    setIsEditing(true);
  };

  const onClickCancelEditDaoName: MouseEventHandler<HTMLButtonElement> = () => {
    setIsEditing(false);
  };

  const onSubmitSetName: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const name = nameInput.value;
    if (!name) return;

    dispatch(setDaoName({ name }));
    setIsEditing(false);
  };

  if (isEditing)
    return (
      <form
        className="flex gap-2 items-center justify-between"
        onSubmit={onSubmitSetName}
      >
        <input
          className="text-lg font-semibold text-gray-900 p-1"
          type="text"
          name="name"
          defaultValue={daoDocumentName}
          autoFocus
        />
        <div className="flex gap-2">
          <button type="submit" className="text-sm text-gray-600">
            Save
          </button>
          <button
            className="text-sm text-red-800"
            onClick={onClickCancelEditDaoName}
          >
            Cancel
          </button>
        </div>
      </form>
    );

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-900">{daoDocumentName}</h2>
      <button className="text-sm text-gray-600" onClick={onClickEditDaoName}>
        Edit Name
      </button>
    </div>
  );
}
