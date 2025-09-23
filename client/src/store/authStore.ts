import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type User = {
  id: string;
  email: string;
  name: string;
  image: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
};

type AuthState = {
  token: string | null;
  user: User | null;
  setAuth: (auth: { token: string; user: User }) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        setAuth: (auth) => set({ token: auth.token, user: auth.user }),
        clearAuth: () => set({ token: null, user: null }),
      }),
      {
        name: "auth",
        version: 1,
        partialize: (s) => ({ token: s.token, user: s.user }),
      }
    ),
    { name: "auth-store" }
  )
);
