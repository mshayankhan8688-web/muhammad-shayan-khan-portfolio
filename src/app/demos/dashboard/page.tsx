import type { Metadata } from "next";
import { DashboardDemo } from "@/components/demos/DashboardDemo";
import { DemoFrame } from "@/components/demos/DemoFrame";

export const metadata: Metadata = {
  title: "Dashboard Demo | Muhammad Shayan Khan",
};

export default function DashboardDemoPage() {
  return (
    <DemoFrame kicker="Frontend demo" title="Dashboard Demo">
      <DashboardDemo />
    </DemoFrame>
  );
}
