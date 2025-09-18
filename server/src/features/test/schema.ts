import { z } from "zod";

export const testSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});
