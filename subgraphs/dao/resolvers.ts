import type { BaseSubgraph } from "@powerhousedao/reactor-api";
import { addFile } from "document-drive";
import { setName } from "document-model";
import { actions, daoDocumentType } from "roxium-dao-ops/document-models/dao";

import type {
  DaoDocument,
  SetDaoNameInput,
  SetDescriptionInput,
  UpdateDaoNameInput,
  UpdateDaoDescriptionInput,
  SetProposalNameInput,
  SetProposalDescriptionInput,
  SetTaskNameInput,
  SetTaskDescriptionInput,
} from "roxium-dao-ops/document-models/dao";

export const getResolvers = (
  subgraph: BaseSubgraph,
): Record<string, unknown> => {
  const reactor = subgraph.reactor;

  return {
    Query: {
      Dao: async () => {
        return {
          getDocument: async (args: { docId: string; driveId: string }) => {
            const { docId, driveId } = args;

            if (!docId) {
              throw new Error("Document id is required");
            }

            if (driveId) {
              const docIds = await reactor.getDocuments(driveId);
              if (!docIds.includes(docId)) {
                throw new Error(
                  `Document with id ${docId} is not part of ${driveId}`,
                );
              }
            }

            const doc = await reactor.getDocument<DaoDocument>(docId);
            return {
              driveId: driveId,
              ...doc,
              ...doc.header,
              created: doc.header.createdAtUtcIso,
              lastModified: doc.header.lastModifiedAtUtcIso,
              state: doc.state.global,
              stateJSON: doc.state.global,
              revision: doc.header?.revision?.global ?? 0,
            };
          },
          getDocuments: async (args: { driveId: string }) => {
            const { driveId } = args;
            const docsIds = await reactor.getDocuments(driveId);
            const docs = await Promise.all(
              docsIds.map(async (docId) => {
                const doc = await reactor.getDocument<DaoDocument>(docId);
                return {
                  driveId: driveId,
                  ...doc,
                  ...doc.header,
                  created: doc.header.createdAtUtcIso,
                  lastModified: doc.header.lastModifiedAtUtcIso,
                  state: doc.state.global,
                  stateJSON: doc.state.global,
                  revision: doc.header?.revision?.global ?? 0,
                };
              }),
            );

            return docs.filter(
              (doc) => doc.header.documentType === daoDocumentType,
            );
          },
        };
      },
    },
    Mutation: {
      Dao_createDocument: async (
        _: unknown,
        args: { name: string; driveId?: string },
      ) => {
        const { driveId, name } = args;
        const document = await reactor.addDocument(daoDocumentType);

        if (driveId) {
          await reactor.addAction(
            driveId,
            addFile({
              name,
              id: document.header.id,
              documentType: daoDocumentType,
            }),
          );
        }

        if (name) {
          await reactor.addAction(document.header.id, setName(name));
        }

        return document.header.id;
      },

      Dao_setDaoName: async (
        _: unknown,
        args: { docId: string; input: SetDaoNameInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.setDaoName(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to setDaoName");
        }

        return true;
      },

      Dao_setDescription: async (
        _: unknown,
        args: { docId: string; input: SetDescriptionInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.setDescription(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to setDescription");
        }

        return true;
      },

      Dao_updateDaoName: async (
        _: unknown,
        args: { docId: string; input: UpdateDaoNameInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.updateDaoName(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to updateDaoName");
        }

        return true;
      },

      Dao_updateDaoDescription: async (
        _: unknown,
        args: { docId: string; input: UpdateDaoDescriptionInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.updateDaoDescription(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(
            result.error?.message ?? "Failed to updateDaoDescription",
          );
        }

        return true;
      },

      Dao_setProposalName: async (
        _: unknown,
        args: { docId: string; input: SetProposalNameInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.setProposalName(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to setProposalName");
        }

        return true;
      },

      Dao_setProposalDescription: async (
        _: unknown,
        args: { docId: string; input: SetProposalDescriptionInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.setProposalDescription(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(
            result.error?.message ?? "Failed to setProposalDescription",
          );
        }

        return true;
      },

      Dao_setTaskName: async (
        _: unknown,
        args: { docId: string; input: SetTaskNameInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.setTaskName(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(result.error?.message ?? "Failed to setTaskName");
        }

        return true;
      },

      Dao_setTaskDescription: async (
        _: unknown,
        args: { docId: string; input: SetTaskDescriptionInput },
      ) => {
        const { docId, input } = args;
        const doc = await reactor.getDocument<DaoDocument>(docId);
        if (!doc) {
          throw new Error("Document not found");
        }

        const result = await reactor.addAction(
          docId,
          actions.setTaskDescription(input),
        );

        if (result.status !== "SUCCESS") {
          throw new Error(
            result.error?.message ?? "Failed to setTaskDescription",
          );
        }

        return true;
      },
    },
  };
};
