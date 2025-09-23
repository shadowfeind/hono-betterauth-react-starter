import { useAuthStore } from "@/store/authStore";
import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  loader: () => {
    const { token } = useAuthStore.getState();
    console.log({ token });

    if (!token) {
      throw redirect({
        to: "/auth",
      });
    }
  },

  component: () => <Outlet />,
});
