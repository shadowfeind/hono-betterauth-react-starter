import { useAuthStore } from "@/store/auth-store";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/auth/callback")({
  component: CallbackPage,
});

function CallbackPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);

  useEffect(() => {
    (async () => {
      const sp = new URLSearchParams(window.location.search);
      const err = sp.get("error");
      if (err) {
        toast.error(err);
        navigate({ to: "/auth", replace: true });
        return;
      }
      const res = await fetch("/api/auth/session", { credentials: "include" });

      if (res.ok) {
        const data = await res.json();
        setAuth(data);
        navigate({ to: "/profile", replace: true });
      } else {
        toast.error("Sign-in failed. Please try again.");
        navigate({ to: "/auth", replace: true });
      }
    })();
  }, [navigate, setAuth]);

  return <div className="p-6 text-sm opacity-70">Signing you in…</div>;
}
