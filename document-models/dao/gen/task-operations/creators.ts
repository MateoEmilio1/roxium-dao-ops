import { createAction } from "document-model/core";
import {
  SetTaskNameInputSchema,
  SetTaskDescriptionInputSchema,
} from "../schema/zod.js";
import type { SetTaskNameInput, SetTaskDescriptionInput } from "../types.js";
import type { SetTaskNameAction, SetTaskDescriptionAction } from "./actions.js";

export const setTaskName = (input: SetTaskNameInput) =>
  createAction<SetTaskNameAction>(
    "SET_TASK_NAME",
    { ...input },
    undefined,
    SetTaskNameInputSchema,
    "global",
  );

export const setTaskDescription = (input: SetTaskDescriptionInput) =>
  createAction<SetTaskDescriptionAction>(
    "SET_TASK_DESCRIPTION",
    { ...input },
    undefined,
    SetTaskDescriptionInputSchema,
    "global",
  );
