export type EventItem = {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  venue: string;
  city: string;
  blurb: string;
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
    id: "1",
    title: "Signal Room",
    date: "Fri · 24 Oct 2026",
    day: "24",
    month: "OCT",
    venue: "The Basement",
    city: "Your City",
    blurb: "Club night placeholder — add artists and ticket link.",
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

export const homeArtists = [
  { id: 1, name: "Artist One", role: "DJ / Producer" },
  { id: 2, name: "Artist Two", role: "Live Act" },
  { id: 3, name: "Artist Three", role: "DJ" },
  { id: 4, name: "Artist Four", role: "Selector" },
];
