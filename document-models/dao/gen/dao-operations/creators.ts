import { createAction } from "document-model/core";
import {
  SetDaoNameInputSchema,
  SetDescriptionInputSchema,
  UpdateDaoNameInputSchema,
  UpdateDaoDescriptionInputSchema,
} from "../schema/zod.js";
import type {
  SetDaoNameInput,
  SetDescriptionInput,
  UpdateDaoNameInput,
  UpdateDaoDescriptionInput,
} from "../types.js";
import type {
  SetDaoNameAction,
  SetDescriptionAction,
  UpdateDaoNameAction,
  UpdateDaoDescriptionAction,
} from "./actions.js";

export const setDaoName = (input: SetDaoNameInput) =>
  createAction<SetDaoNameAction>(
    "SET_DAO_NAME",
    { ...input },
    undefined,
    SetDaoNameInputSchema,
    "global",
  );

export const setDescription = (input: SetDescriptionInput) =>
  createAction<SetDescriptionAction>(
    "SET_DESCRIPTION",
    { ...input },
    undefined,
    SetDescriptionInputSchema,
    "global",
  );

export const updateDaoName = (input: UpdateDaoNameInput) =>
  createAction<UpdateDaoNameAction>(
    "UPDATE_DAO_NAME",
    { ...input },
    undefined,
    UpdateDaoNameInputSchema,
    "global",
  );

export const updateDaoDescription = (input: UpdateDaoDescriptionInput) =>
  createAction<UpdateDaoDescriptionAction>(
    "UPDATE_DAO_DESCRIPTION",
    { ...input },
    undefined,
    UpdateDaoDescriptionInputSchema,
    "global",
  );
