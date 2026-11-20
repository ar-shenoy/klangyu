import { createFileRoute } from "@tanstack/react-router";
import { KlangyuApp } from "@/components/klangyu/app";

export const Route = createFileRoute("/")({
  component: KlangyuApp,
});
