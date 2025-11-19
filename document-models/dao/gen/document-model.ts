import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  author: {
    name: "",
    website: "",
  },
  description:
    "A DAO in roxium-dao-ops/dao represents an organization that groups related work.\nEach DAO has a name and description, and can contain multiple proposals.\nA proposal has a title and description, and is broken down into tasks.\nEach task includes a title, description, and an optional budget to describe the expected compensation or cost.",
  extension: "",
  id: "roxium-dao-ops/dao",
  name: "DAO",
  specifications: [
    {
      changeLog: [],
      modules: [
        {
          description: "",
          id: "53fd6f9c-a0ba-4639-a02c-ffba729a09e2",
          name: "dao_operations",
          operations: [
            {
              description: "setting the name of the dao",
              errors: [],
              examples: [],
              id: "d5068fe9-8298-4e5f-a8ca-fd61d5e94a07",
              name: "SET_DAO_NAME",
              reducer: "",
              schema:
                'input SetDaoNameInput {\n  "Add your inputs here"\n  name: String!\n}',
              scope: "global",
              template: "",
            },
            {
              description: "",
              errors: [],
              examples: [],
              id: "df18d049-acac-4360-ab61-901194a72ce3",
              name: "SET_DESCRIPTION",
              reducer: "",
              schema:
                'input SetDescriptionInput {\n  "Add your inputs here"\n  description: String\n}',
              scope: "global",
              template: "",
            },
          ],
        },
        {
          description: "",
          id: "0652afde-6857-47cb-a625-61c2f6a6a178",
          name: "proposal_operations",
          operations: [
            {
              description: "setting the name of the proposal",
              errors: [],
              examples: [],
              id: "8c0aca41-02e4-4403-a928-e4927d9f6c0f",
              name: "SET_PROPOSAL_NAME",
              reducer: "",
              schema:
                'input SetProposalNameInput {\n  "Add your inputs here"\n  name: String!\n}',
              scope: "global",
              template: "",
            },
            {
              description: "setting the description of the proposal",
              errors: [],
              examples: [],
              id: "5d2d353a-eac7-4ce9-ae26-6e383a784702",
              name: "SET_PROPOSAL_DESCRIPTION",
              reducer: "",
              schema:
                'input SetProposalDescriptionInput {\n  "Add your inputs here"\n  description: String!\n}',
              scope: "global",
              template: "",
            },
          ],
        },
        {
          description: "",
          id: "21a795ec-bc57-4b99-92fc-9aa953769cdd",
          name: "task_operations",
          operations: [
            {
              description: "setting the name of the task",
              errors: [],
              examples: [],
              id: "95558542-0e77-4239-b278-7cc701d0edc9",
              name: "SET_TASK_NAME",
              reducer: "",
              schema:
                'input SetTaskNameInput {\n  "Add your inputs here"\n  name: String!\n}',
              scope: "global",
              template: "",
            },
            {
              description: "setting the description of the task",
              errors: [],
              examples: [],
              id: "b935f7d6-55d0-4956-85a9-984b1f44e59d",
              name: "SET_TASK_DESCRIPTION",
              reducer: "",
              schema:
                'input SetTaskDescriptionInput {\n  "Add your inputs here"\n  description: String!\n}',
              scope: "global",
              template: "",
            },
          ],
        },
      ],
      state: {
        global: {
          examples: [],
          initialValue:
            '"{\\n  \\"name\\": \\"\\",\\n  \\"description\\": null,\\n  \\"proposals\\": []\\n}"',
          schema:
            "type DaoState {\n  name: String!\n  description: String\n  proposals: [Proposal!]!\n}\n\ntype Proposal {\n  id: ID!\n  title: String!\n  description: String!\n  tasks: [Task!]!\n}\n\ntype Task {\n  id: ID!\n  title: String!\n  description: String!\n  budget: Float  # optional\n}\n",
        },
        local: {
          examples: [],
          initialValue: '""',
          schema: "",
        },
      },
      version: 1,
    },
  ],
};
