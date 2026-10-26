import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { HomeHero } from "@/components/HomeHero";
import { InkButton } from "@/components/InkButton";
import { Reveal } from "@/components/Reveal";
import {
  homeArtists,
  upcomingEvents,
} from "@/lib/events";

export default function HomePage() {
  const nextEvents = upcomingEvents.slice(0, 4);

  return (
    <>
      <HomeHero />

      {/* Upcoming */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <h2 className="font-display text-3xl tracking-[-0.02em] text-white/95 md:text-4xl">
            <span className="title-highlight">All Events</span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nextEvents.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex justify-end">
            <Link
              href="/events"
              className="font-sans text-[11px] tracking-[0.22em] text-white/50 uppercase transition-colors duration-500 hover:text-white"
            >
              View full calendar →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Artists strip */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] text-white/95 md:text-4xl">
                  <span className="title-highlight">
                    Our Guests and Collaborators
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeArtists.map((artist, i) => (
              <Reveal key={artist.id} delay={i * 0.06}>
                <Link href="/artists" className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name ?? ""}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    />
                  </div>
                  {artist.name ? (
                    <h3 className="mt-4 font-display text-xl tracking-[-0.02em] text-white">
                      <span className="title-highlight">{artist.name}</span>
                    </h3>
                  ) : null}
                  {artist.role ? (
                    <p className="mt-1 font-sans text-sm text-white/40">
                      {artist.role}
                    </p>
                  ) : null}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex justify-end">
            <Link
              href="/artists"
              className="font-sans text-[11px] tracking-[0.22em] text-white/50 uppercase transition-colors duration-500 hover:text-white"
            >
              Full roster →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Bookings CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="glass-panel flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl tracking-[-0.02em] text-white md:text-4xl">
                  <span className="title-highlight">
                    Bookings and Collaborations
                  </span>
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">
                  Have a space The Office should takeover, or want to get
                  involved in a future event. We want to hear it.
                </p>
              </div>
              <InkButton href="mailto:info@theofficesoundz.com">
                Contact Us
              </InkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
