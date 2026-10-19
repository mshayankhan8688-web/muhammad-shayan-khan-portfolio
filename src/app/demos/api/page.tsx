import type { Metadata } from "next";
import { ApiDemo } from "@/components/demos/ApiDemo";
import { DemoFrame } from "@/components/demos/DemoFrame";

export const metadata: Metadata = {
  title: "API Console Demo | Muhammad Shayan Khan",
};

export default function ApiDemoPage() {
  return (
    <DemoFrame kicker="Frontend demo" title="API Console Demo">
      <ApiDemo />
    </DemoFrame>
  );
}
