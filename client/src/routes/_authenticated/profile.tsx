import { useAuthStore } from "@/store/authStore";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: ProfileComponent,
});

function ProfileComponent() {
  const { user } = useAuthStore();

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
    </div>
  );
}
