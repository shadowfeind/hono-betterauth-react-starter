import { useAuthStore } from "@/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export const useLogout = () => {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((s) => s.clearAuth);
  return useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/sign-out", {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Failed to logout");
      }
    },
    onSuccess: () => {
      clearAuth();
      toast.success("Logged out successfully");
      navigate({ to: "/auth", replace: true });
    },
    onError: (error) => {
      toast.error(error.message || "An unexpected error occurred.");
    },
  });
};
