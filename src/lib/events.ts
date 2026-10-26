export type EventItem = {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  venue: string;
  city: string;
  blurb: string;
  image?: string;
  announce?: boolean;
};

export const upcomingEvents: EventItem[] = [
  {
    id: "announce",
    title: "To be announced...",
    date: "Soon",
    day: "—",
    month: "TBA",
    venue: "The Office",
    city: "Leeds",
    blurb: "Details coming soon...",
    announce: true,
  },
  {
    id: "house-party-2",
    title: "House Party 2.0",
    date: "07/02/2026",
    day: "07",
    month: "FEB",
    venue: "Hyde Park",
    city: "Leeds",
    blurb: "House party at a secret location. 10pm till late.",
    image: "/events/house-party-2.png",
  },
  {
    id: "file-001",
    title: "The Office House party",
    date: "15/11/2025",
    day: "15",
    month: "NOV",
    venue: "Hyde Park",
    city: "Leeds",
    blurb: "House party at a secret location.",
    image: "/events/instagram-3.png",
  },
  {
    id: "file-001-250925",
    title: "File #001",
    date: "25/09/25",
    day: "25",
    month: "SEP",
    venue: "Freedom Mills",
    city: "Leeds",
    blurb: "DnB all night.",
    image: "/events/poster-without-qr.png",
  },
];

export const homeArtists: {
  id: number;
  image: string;
  name?: string;
  role?: string;
}[] = [
  {
    id: 2,
    image: "/guests/guest-2.jpg",
    name: "Anaïs",
    role: "DJ/Producer",
  },
  {
    id: 1,
    image: "/guests/guest-1.jpg",
    name: "Licia",
    role: "DJ/Producer",
  },
  {
    id: 3,
    image: "/guests/guest-3.jpg",
    name: "Mylania",
    role: "DJ/Producer",
  },
  {
    id: 4,
    image: "/guests/guest-4.jpg",
    name: "GreenHouse",
    role: "DJ/Producer",
  },
];
