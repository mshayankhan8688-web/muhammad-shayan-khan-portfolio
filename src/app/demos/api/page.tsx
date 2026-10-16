import type { Metadata } from "next";
import { ApiDemo } from "@/components/demos/ApiDemo";
import { DemoFrame } from "@/components/demos/DemoFrame";

export const metadata: Metadata = {
  title: "RESTful API Demo | Muhammad Shayan Khan",
};

export default function ApiDemoPage() {
  return (
    <DemoFrame kicker="Live demo" title="RESTful API Service">
      <ApiDemo />
    </DemoFrame>
  );
}
