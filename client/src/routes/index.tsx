import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Welcome to the Home Page</h1>
      <Link to="/auth">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
