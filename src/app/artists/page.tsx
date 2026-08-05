import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const artists = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Artist Name ${i + 1}`,
  role: "Genre / Role",
  appearing: "Appearing at — add event",
}));

export default function ArtistsPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our Artists"
            title="The roster"
            description="DJs, live acts, and selectors we book and represent — drop in portraits and bios."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {artists.map((artist, i) => (
            <Reveal key={artist.id} delay={i * 0.04}>
              <article className="group">
                <div className="placeholder-media aspect-[3/4] w-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" />
                <h2 className="mt-5 font-display text-2xl tracking-[-0.02em] text-white">
                  {artist.name}
                </h2>
                <p className="mt-1 font-sans text-sm text-white/40">
                  {artist.role}
                </p>
                <p className="mt-2 font-sans text-[11px] tracking-[0.16em] text-white/30 uppercase">
                  {artist.appearing}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
