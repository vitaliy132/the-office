import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { homeArtists } from "@/lib/events";

type ArtistCard = {
  id: string | number;
  image?: string;
  name?: string;
  role?: string;
};

const additionalArtists: ArtistCard[] = [
  {
    name: "WooJoo",
    role: "DJ/Producer",
    image: "/artists/woojoo.jpg",
  },
  {
    name: "Two Big Hands",
    role: "DJ",
    image: "/artists/two-big-hands.jpeg",
  },
  { name: "Ebz", role: "DJ", image: "/artists/ebz.png" },
  {
    name: "AD*N",
    role: "DJ/Producer",
    image: "/artists/adn.jpg",
  },
  {
    name: "Just Joe",
    role: "DJ/Producer",
    image: "/artists/just-joe.jpeg",
  },
  {
    name: "Amelia Leigh",
    role: "DJ/Producer",
    image: "/artists/amelia-leigh.jpg",
  },
  {
    name: "MillyLynne",
    role: "DJ",
    image: "/artists/millylynne.jpg",
  },
  {
    name: "Coco's Hifi",
    role: "Soundsystem",
    image: "/artists/cocos-hifi.jpeg",
  },
  {
    name: "TMN",
    role: "DJ/Producer",
    image: "/artists/tmn.jpg",
  },
  {
    name: "I.Hate.This",
    role: "Photographer/Videographer",
    image: "/artists/i-hate-this.jpeg",
  },
  {
    name: "Luke Briggs",
    role: "Photographer",
    image: "/artists/luke-briggs.jpeg",
  },
].map((artist) => ({ ...artist, id: artist.name }));

const artistsAlphabetically: ArtistCard[] = [
  ...homeArtists,
  ...additionalArtists,
].sort((a, b) =>
  (a.name ?? "").localeCompare(b.name ?? "", "en", { sensitivity: "base" }),
);

export default function ArtistsPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading title="Our Artists, Guests and Collaborators" />
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {artistsAlphabetically.map((artist, i) => (
            <Reveal key={artist.id} delay={i * 0.04}>
              <article className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  {artist.image ? (
                    <Image
                      src={artist.image}
                      alt={artist.name ?? ""}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="placeholder-media h-full w-full" />
                  )}
                </div>
                {artist.name ? (
                  <h2 className="mt-5 font-display text-2xl tracking-[-0.02em] text-white">
                    {artist.name}
                  </h2>
                ) : null}
                {artist.role ? (
                  <p className="mt-1 font-sans text-sm text-white/40">
                    {artist.role}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
