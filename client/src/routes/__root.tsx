import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";
import { NavigationProgress } from "@/components/navigation-progress";
import { NotFound } from "@/components/pages/not-found";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <React.Fragment>
      <NavigationProgress />
      <Outlet />
      <Toaster duration={2000} />
      {import.meta.env.MODE === "development" && (
        <>
          <ReactQueryDevtools buttonPosition="bottom-left" />
          <TanStackRouterDevtools position="bottom-right" />
        </>
      )}
    </React.Fragment>
  );
}
