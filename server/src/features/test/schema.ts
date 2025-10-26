import z from "zod";

export const testSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  active: z.boolean().optional(),
});
