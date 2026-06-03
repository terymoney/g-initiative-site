import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/initiatives")({
  component: InitiativesLayout,
});

function InitiativesLayout() {
  return <Outlet />;
}