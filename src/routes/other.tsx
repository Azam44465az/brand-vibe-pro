import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/other")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
