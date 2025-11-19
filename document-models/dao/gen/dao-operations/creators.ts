import { createAction } from "document-model/core";
import {
  SetDaoNameInputSchema,
  SetDescriptionInputSchema,
} from "../schema/zod.js";
import type { SetDaoNameInput, SetDescriptionInput } from "../types.js";
import type { SetDaoNameAction, SetDescriptionAction } from "./actions.js";

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
