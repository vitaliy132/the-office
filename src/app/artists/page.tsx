import type { Metadata } from "next";
import { ArtistsFeed } from "@/components/ArtistsFeed";
import { artists } from "@/lib/artists";

export const metadata: Metadata = {
  title: "The Office — Artists",
  description: "Artists, guests, and collaborators from The Office.",
};

export default function ArtistsPage() {
  return <ArtistsFeed artists={artists} />;
}
