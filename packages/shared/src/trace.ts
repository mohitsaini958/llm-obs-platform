import { z } from "zod";

export const TraceStatusSchema = z.enum(["success", "error"]);
export type TraceStatus = z.infer<typeof TraceStatusSchema>;


export const IngestTraceSchema = z.object({
  id: z.string().uuid(),
  promptVersionId: z.string().uuid().optional(),
  provider: z.string().min(1),
  model: z.string().min(1),
  input: z.unknown(),
  output: z.string().nullable(),
  latencyMs: z.number().int().nonnegative(),
  promptTokens: z.number().int().nonnegative(),
  completionTokens: z.number().int().nonnegative(),
  status: TraceStatusSchema,
  errorMessage: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
  timestamp: z.string().datetime(),
});

export type IngestTracePayload = z.infer<typeof IngestTraceSchema>;


export const StoredTraceSchema = IngestTraceSchema.extend({
  projectId: z.string().uuid(),
  costUsd: z.number().nonnegative(),
  createdAt: z.string().datetime(),
});

export type StoredTrace = z.infer<typeof StoredTraceSchema>;