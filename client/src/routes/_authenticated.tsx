import { forbidUnAuthenticated } from "@/lib/route-guard";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  loader: forbidUnAuthenticated,
  component: () => <Outlet />,
});
