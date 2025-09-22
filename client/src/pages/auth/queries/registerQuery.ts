/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { RegisterSchema } from "../auth.schema";
import { z } from "zod";
import { toast } from "sonner";

type RegisterInput = z.infer<typeof RegisterSchema>;

export const useRegisterMutation = () => {
  const navigate = useNavigate();

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

      return response.json();
    },
    onSuccess: () => {
      navigate({ to: "/" });
      toast.success("Successfully Logged In");
    },
    onError: (error) => {
      toast.error(error.message || "An unexpected error occurred.");
    },
  });
};
