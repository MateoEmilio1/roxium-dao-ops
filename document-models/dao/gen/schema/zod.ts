import { z } from "zod";
import type {
  DaoState,
  Proposal,
  SetDaoNameInput,
  SetDescriptionInput,
  SetProposalDescriptionInput,
  SetProposalNameInput,
  SetTaskDescriptionInput,
  SetTaskNameInput,
  Task,
  UpdateDaoDescriptionInput,
  UpdateDaoNameInput,
} from "./types.js";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export function DaoStateSchema(): z.ZodObject<Properties<DaoState>> {
  return z.object({
    __typename: z.literal("DaoState").optional(),
    description: z.string().nullable(),
    name: z.string(),
    proposals: z.array(ProposalSchema()),
  });
}

export function ProposalSchema(): z.ZodObject<Properties<Proposal>> {
  return z.object({
    __typename: z.literal("Proposal").optional(),
    description: z.string(),
    id: z.string(),
    tasks: z.array(TaskSchema()),
    title: z.string(),
  });
}

export function SetDaoNameInputSchema(): z.ZodObject<
  Properties<SetDaoNameInput>
> {
  return z.object({
    name: z.string(),
  });
}

export function SetDescriptionInputSchema(): z.ZodObject<
  Properties<SetDescriptionInput>
> {
  return z.object({
    description: z.string().nullish(),
  });
}

export function SetProposalDescriptionInputSchema(): z.ZodObject<
  Properties<SetProposalDescriptionInput>
> {
  return z.object({
    description: z.string(),
  });
}

export function SetProposalNameInputSchema(): z.ZodObject<
  Properties<SetProposalNameInput>
> {
  return z.object({
    name: z.string(),
  });
}

export function SetTaskDescriptionInputSchema(): z.ZodObject<
  Properties<SetTaskDescriptionInput>
> {
  return z.object({
    description: z.string(),
  });
}

export function SetTaskNameInputSchema(): z.ZodObject<
  Properties<SetTaskNameInput>
> {
  return z.object({
    name: z.string(),
  });
}

export function TaskSchema(): z.ZodObject<Properties<Task>> {
  return z.object({
    __typename: z.literal("Task").optional(),
    budget: z.number().nullable(),
    description: z.string(),
    id: z.string(),
    title: z.string(),
  });
}

export function UpdateDaoDescriptionInputSchema(): z.ZodObject<
  Properties<UpdateDaoDescriptionInput>
> {
  return z.object({
    description: z.string().nullish(),
  });
}

export function UpdateDaoNameInputSchema(): z.ZodObject<
  Properties<UpdateDaoNameInput>
> {
  return z.object({
    name: z.string().nullish(),
  });
}
