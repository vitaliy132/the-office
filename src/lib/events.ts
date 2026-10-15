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

export const featuredEvent: EventItem = {
  id: "featured",
  title: "Midnight Protocol",
  date: "Sat · 18 Oct 2026",
  day: "18",
  month: "OCT",
  venue: "Warehouse 12",
  city: "Your City",
  blurb:
    "A flagship night from The Office — replace with your headline event, lineup, and doors time.",
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
  {
    id: "3",
    title: "Glass Circuit",
    date: "Fri · 14 Nov 2026",
    day: "14",
    month: "NOV",
    venue: "Studio Hall",
    city: "Your City",
    blurb: "Live showcase placeholder.",
  },
  {
    id: "2",
    title: "Afterlight",
    date: "Sat · 01 Nov 2026",
    day: "01",
    month: "NOV",
    venue: "Rooftop East",
    city: "Your City",
    blurb: "Open-air / late set placeholder.",
  },
  {
    id: "4",
    title: "Northline Sessions",
    date: "Sat · 22 Nov 2026",
    day: "22",
    month: "NOV",
    venue: "Club Atlas",
    city: "Your City",
    blurb: "Resident night placeholder.",
  },
  {
    id: "5",
    title: "Velvet Frequency",
    date: "Fri · 05 Dec 2026",
    day: "05",
    month: "DEC",
    venue: "The Archive",
    city: "Your City",
    blurb: "Season closer placeholder.",
  },
  {
    id: "6",
    title: "Year End Office",
    date: "Wed · 31 Dec 2026",
    day: "31",
    month: "DEC",
    venue: "Main Room",
    city: "Your City",
    blurb: "NYE takeover placeholder.",
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
    name: "Licia",
    role: "DJ/Producer",
  },
  {
    id: 1,
    image: "/guests/guest-1.jpg",
    name: "Anaïs",
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
