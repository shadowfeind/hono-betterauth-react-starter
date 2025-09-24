import { forbidAuthenticated } from "@/lib/route-guard";
import Login from "@/pages/auth/login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  loader: forbidAuthenticated,
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
