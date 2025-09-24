import { useLogout } from "@/pages/auth/queries/logout-query";
import { useAuthStore } from "@/store/auth-store";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: ProfileComponent,
});

function ProfileComponent() {
  const { user } = useAuthStore();
  const { mutate, isPending } = useLogout();

  const handleLogout = () => mutate();

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">User Profile</h1>
      {user && (
        <div>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}
          </p>
          <p>
            <strong>Created At:</strong> {user.createdAt}
          </p>
          <p>
            <strong>Updated At:</strong> {user.updatedAt}
          </p>
        </div>
      )}
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white p-2 rounded"
        disabled={isPending}
      >
        {isPending ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}
