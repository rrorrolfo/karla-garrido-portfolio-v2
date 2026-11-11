import type { Metadata } from "next";
import Demos from "@/components/demos/Demos";

export const metadata: Metadata = { title: "Demo Reel" };

export default function DemosPage() {
  return <Demos />;
}
