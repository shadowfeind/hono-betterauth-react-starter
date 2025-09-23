import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { LoginSchema } from "../auth.schema";
import { z } from "zod";
import { toast } from "sonner";

type LoginInput = z.infer<typeof LoginSchema>;

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const callbackURL =
    import.meta.env.VITE_BETTER_AUTH_CALLBACK_URL || window.location.origin;

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, callbackURL }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
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
