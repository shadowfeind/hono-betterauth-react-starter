/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { RegisterSchema } from "../auth.schema";
import { z } from "zod";
import { toast } from "sonner";
import { useLoginMutation } from "./login-query";

type RegisterInput = z.infer<typeof RegisterSchema>;

export const useRegisterMutation = () => {
  const { mutate: login } = useLoginMutation();

  const callbackURL =
    import.meta.env.VITE_BETTER_AUTH_CALLBACK_URL || window.location.origin;

  return useMutation({
    mutationFn: async (data: RegisterInput) => {
      const { confirmPassword, ...registrationData } = data;

      const response = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...registrationData,
          callbackURL: callbackURL,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      return { response: await response.json(), registrationData };
    },
    onSuccess: ({ registrationData }) => {
      login({
        email: registrationData.email,
        password: registrationData.password,
        rememberMe: false,
      });
    },
    onError: (error) => {
      toast.error(error.message || "An unexpected error occurred.");
    },
  });
};
