import type { Metadata } from "next";
import { DemoFrame } from "@/components/demos/DemoFrame";
import { StoreDemo } from "@/components/demos/StoreDemo";

export const metadata: Metadata = {
  title: "Storefront Demo | Muhammad Shayan Khan",
};

export default function StoreDemoPage() {
  return (
    <DemoFrame kicker="Frontend demo" title="Storefront Demo">
      <StoreDemo />
    </DemoFrame>
  );
}
