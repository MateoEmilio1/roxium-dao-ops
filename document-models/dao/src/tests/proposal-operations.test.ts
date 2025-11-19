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
  setProposalName,
  SetProposalNameInputSchema,
  setProposalDescription,
  SetProposalDescriptionInputSchema,
} from "roxium-dao-ops/document-models/dao";

describe("ProposalOperations Operations", () => {
  it("should handle setProposalName operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProposalNameInputSchema());

    const updatedDocument = reducer(document, setProposalName(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROPOSAL_NAME",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle setProposalDescription operation", () => {
    const document = utils.createDocument();
    const input = generateMock(SetProposalDescriptionInputSchema());

    const updatedDocument = reducer(document, setProposalDescription(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "SET_PROPOSAL_DESCRIPTION",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
