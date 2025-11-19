/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect } from "vitest";
import { generateMock } from "@powerhousedao/codegen";
import {
  reducer,
  utils,
  isDaoDocument,
  setTaskName,
  SetTaskNameInputSchema,
} from "roxium-dao-ops/document-models/dao";

describe("Task Operations", () => {
  it("should handle setTaskName operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetTaskNameInputSchema());

    const updatedDocument = reducer(document, setTaskName(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_TASK_NAME",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
