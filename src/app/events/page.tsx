import type { Metadata } from "next";
import { EventsFeed } from "@/components/EventsFeed";
import { upcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "The Office — Events",
  description: "Upcoming nights from The Office.",
};

export default function EventsPage() {
  return <EventsFeed events={upcomingEvents} />;
}
