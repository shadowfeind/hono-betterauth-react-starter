import { useAuthStore } from "@/store/auth-store";
import { redirect } from "@tanstack/react-router";

export const forbidAuthenticated = () => {
  const { token } = useAuthStore.getState();
  if (token) throw redirect({ to: "/profile" });
};

export const forbidUnAuthenticated = () => {
  const { token } = useAuthStore.getState();
  if (!token) throw redirect({ to: "/auth" });
};
