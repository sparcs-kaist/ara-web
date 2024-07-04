import { z } from "zod";

export const paginationSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    numPages: z.number(),
    numItems: z.number(),
    current: z.number(),
    previous: z.string().url().nullable(),
    next: z.string().url().nullable(),
    results: z.array(schema),
  });
