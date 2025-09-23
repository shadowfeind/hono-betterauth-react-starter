import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});

export const RegisterSchema = LoginSchema.extend({
  name: z.string().min(1, { message: "Name is required" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Please confirm your password" }),
}).superRefine(({ password, confirmPassword }, ctx) => {
  if (password !== confirmPassword) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
      path: ["password"],
    });
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  }
});

export const ForgotPasswordSchema = LoginSchema.omit({ password: true });

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
