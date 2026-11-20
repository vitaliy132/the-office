export type ArtistEntry = {
  id: string;
  name: string;
  image: string;
};

const roster: ArtistEntry[] = [
  { id: "anais", name: "Anaïs", image: "/guests/guest-2.jpg" },
  { id: "licia", name: "Licia", image: "/guests/guest-1.jpg" },
  { id: "mylania", name: "Mylania", image: "/guests/guest-3.jpg" },
  { id: "greenhouse", name: "GreenHouse", image: "/guests/guest-4.jpg" },
  { id: "woojoo", name: "WooJoo", image: "/artists/woojoo.jpg" },
  { id: "two-big-hands", name: "Two Big Hands", image: "/artists/two-big-hands.jpeg" },
  { id: "ebz", name: "Ebz", image: "/artists/ebz.png" },
  { id: "adn", name: "AD*N", image: "/artists/adn.jpg" },
  { id: "just-joe", name: "Just Joe", image: "/artists/just-joe.jpeg" },
  { id: "amelia-leigh", name: "Amelia Leigh", image: "/artists/amelia-leigh.jpg" },
  { id: "millylynne", name: "MillyLynne", image: "/artists/millylynne.jpg" },
  { id: "cocos-hifi", name: "Coco's Hifi", image: "/artists/cocos-hifi.jpeg" },
  { id: "tmn", name: "TMN", image: "/artists/tmn.jpg" },
  { id: "i-hate-this", name: "I.Hate.This", image: "/artists/i-hate-this.jpeg" },
  { id: "luke-briggs", name: "Luke Briggs", image: "/artists/luke-briggs.jpeg" },
];

export const artists: ArtistEntry[] = [...roster].sort((a, b) =>
  a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
);
