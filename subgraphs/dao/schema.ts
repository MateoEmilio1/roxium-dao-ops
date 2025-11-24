import { gql } from "graphql-tag";
import type { DocumentNode } from "graphql";

export const schema: DocumentNode = gql`
  """
  Queries: Dao Document
  """
  type DaoQueries {
    getDocument(docId: PHID!, driveId: PHID): Dao
    getDocuments(driveId: String!): [Dao!]
  }

  type Query {
    Dao: DaoQueries
  }

  """
  Mutations: Dao
  """
  type Mutation {
    Dao_createDocument(name: String!, driveId: String): String

    Dao_setDaoName(
      driveId: String
      docId: PHID
      input: Dao_SetDaoNameInput
    ): Int
    Dao_setDescription(
      driveId: String
      docId: PHID
      input: Dao_SetDescriptionInput
    ): Int
    Dao_updateDaoName(
      driveId: String
      docId: PHID
      input: Dao_UpdateDaoNameInput
    ): Int
    Dao_updateDaoDescription(
      driveId: String
      docId: PHID
      input: Dao_UpdateDaoDescriptionInput
    ): Int
    Dao_setProposalName(
      driveId: String
      docId: PHID
      input: Dao_SetProposalNameInput
    ): Int
    Dao_setProposalDescription(
      driveId: String
      docId: PHID
      input: Dao_SetProposalDescriptionInput
    ): Int
    Dao_setTaskName(
      driveId: String
      docId: PHID
      input: Dao_SetTaskNameInput
    ): Int
    Dao_setTaskDescription(
      driveId: String
      docId: PHID
      input: Dao_SetTaskDescriptionInput
    ): Int
  }

  """
  Module: DaoOperations
  """
  input Dao_SetDaoNameInput {
    "Add your inputs here"
    name: String!
  }
  input Dao_SetDescriptionInput {
    "Add your inputs here"
    description: String
  }
  input Dao_UpdateDaoNameInput {
    "Add your inputs here"
    name: String
  }
  input Dao_UpdateDaoDescriptionInput {
    "Add your inputs here"
    description: String
  }

  """
  Module: ProposalOperations
  """
  input Dao_SetProposalNameInput {
    "Add your inputs here"
    name: String!
  }
  input Dao_SetProposalDescriptionInput {
    "Add your inputs here"
    description: String!
  }

  """
  Module: TaskOperations
  """
  input Dao_SetTaskNameInput {
    "Add your inputs here"
    name: String!
  }
  input Dao_SetTaskDescriptionInput {
    "Add your inputs here"
    description: String!
  }
`;
