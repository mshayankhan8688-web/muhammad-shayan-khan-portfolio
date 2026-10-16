import type { Metadata } from "next";
import { DemoFrame } from "@/components/demos/DemoFrame";
import { StoreDemo } from "@/components/demos/StoreDemo";

export const metadata: Metadata = {
  title: "E-Commerce Platform Demo | Muhammad Shayan Khan",
};

export default function StoreDemoPage() {
  return (
    <DemoFrame kicker="Live demo" title="E-Commerce Platform">
      <StoreDemo />
    </DemoFrame>
  );
}
