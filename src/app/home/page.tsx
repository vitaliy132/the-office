import type { Metadata } from "next";
import { HomeMenu } from "@/components/HomeMenu";

export const metadata: Metadata = {
  title: "The Office — Home",
  description:
    "Born in Leeds. Upcoming nights, guests, and bookings from The Office.",
};

export default function HomePage() {
  return <HomeMenu />;
}
