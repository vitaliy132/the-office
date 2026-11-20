import type { Metadata } from "next";
import { GreetingGate } from "@/components/GreetingGate";

export const metadata: Metadata = {
  title: "The Office",
  description:
    "Born in Leeds. The Office builds nights that bring people together. Clock into your next rave.",
};

export default function GreetingPage() {
  return <GreetingGate />;
}
