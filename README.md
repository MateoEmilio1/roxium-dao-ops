# Roxium DAO Ops · Arkiv Board

Roxium DAO Ops is an on-chain operations board for DAOs built on top of [Arkiv Network](https://arkiv.network/).  
The project lets you create and manage:

- **DAOs** (root entities)
- **Proposals** (decisions / initiatives inside a DAO)
- **Tasks** (operational items linked to each proposal)
- **Memberships** (`user-on-dao` with roles OWNER / CONTRIBUTOR / VIEWER)

Everything is stored as **Arkiv entities**, using the `entityKey` as the on-chain identifier and as a “foreign key” between DAOs, proposals, tasks, and memberships.

## Tech stack

- **Backend**: Node.js + Express
  - Arkiv SDK (`@arkiv-network/sdk`)
  - REST routes under `/api/arkiv/*`:
    - `/daos` → create & list DAOs, fetch board (DAO + proposals + tasks)
    - `/proposals` → create & list proposals, filter by DAO, fetch proposal + tasks
    - `/tasks` → create & list tasks, filter by proposal
  - Entity normalization from Arkiv into a JSON-friendly shape:
    - `entityKey`
    - `attributes`
    - `payload` (typed JSON: `DaoPayload`, `ProposalPayload`, `TaskPayload`)
    - `expiresAtBlock`

- **Frontend**: Next.js + TypeScript + Tailwind
  - **DAOs view**: create new DAOs and list DAOs stored on-chain
  - **DAO Board view** (`/daos/[daoKey]`):
    - Header with DAO info
    - **Proposals** column with active selection
    - **Tasks** column filtered by the selected proposal
    - Forms to create new proposals and tasks
  - Data hooks:
    - `useDaos` → lists all DAOs from `/api/arkiv/daos`
    - `useDaoBoard` → fetches DAO + proposals + tasks from `/api/arkiv/daos/:daoKey/board`
  - Shared domain types (`DaoPayload`, `ProposalPayload`, `TaskPayload`, `ArkivEntity<T>`)

## Project goal

The goal is to demonstrate a full **on-chain DAO operations flow**:

1. Create a DAO and register the owner as `OWNER` via a `user-on-dao` entity.
2. Create **proposals** linked to that DAO using the `daoKey` (the DAO’s entityKey).
3. Create **tasks** linked both to the DAO and to a specific proposal (`daoKey` + `proposalKey`).
4. Visualize everything in a single board (DAO + proposals + tasks) using Arkiv as the only data source.

This repository is a practical example of how to use Arkiv as a **decentralized data layer** for lightweight governance + project management for DAOs, on top of a modern web stack.
