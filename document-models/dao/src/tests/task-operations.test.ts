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
  setTaskDescription,
  SetTaskDescriptionInputSchema,
} from "roxium-dao-ops/document-models/dao";

describe("TaskOperations Operations", () => {
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
  it("should handle setTaskDescription operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetTaskDescriptionInputSchema());

    const updatedDocument = reducer(document, setTaskDescription(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_TASK_DESCRIPTION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
