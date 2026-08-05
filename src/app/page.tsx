import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { HomeHero } from "@/components/HomeHero";
import { InkButton } from "@/components/InkButton";
import { Reveal } from "@/components/Reveal";
import {
  featuredEvent,
  homeArtists,
  upcomingEvents,
} from "@/lib/events";

export default function HomePage() {
  const nextEvents = upcomingEvents.slice(0, 4);

  return (
    <>
      <HomeHero />

      {/* Featured / Next up */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="font-sans text-[11px] tracking-[0.35em] text-white/40 uppercase">
              Next up
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.02em] text-white/95 md:text-5xl">
              Featured night
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <div className="glass-panel grid gap-0 overflow-hidden lg:grid-cols-12">
              <div className="placeholder-media aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]" />
              <div className="flex flex-col justify-between p-6 md:p-10 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex min-w-16 flex-col items-center border border-white/15 bg-white/[0.04] px-3 py-3">
                      <span className="font-sans text-[10px] tracking-[0.2em] text-white/45 uppercase">
                        {featuredEvent.month}
                      </span>
                      <span className="mt-1 font-display text-3xl leading-none text-white">
                        {featuredEvent.day}
                      </span>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] tracking-[0.22em] text-white/40 uppercase">
                        {featuredEvent.date}
                      </p>
                      <p className="mt-1 font-sans text-sm text-white/50">
                        {featuredEvent.venue} · {featuredEvent.city}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-4xl tracking-[-0.02em] text-white md:text-5xl">
                    {featuredEvent.title}
                  </h3>
                  <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-white/50">
                    {featuredEvent.blurb}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <InkButton href="/tickets">Get Tickets</InkButton>
                  <InkButton href="/events" variant="outline">
                    All Events
                  </InkButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-sans text-[11px] tracking-[0.35em] text-white/40 uppercase">
                  Calendar
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-[-0.02em] text-white/95 md:text-5xl">
                  Upcoming events
                </h2>
              </div>
              <Link
                href="/events"
                className="font-sans text-[11px] tracking-[0.22em] text-white/50 uppercase transition-colors duration-500 hover:text-white"
              >
                View full calendar →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nextEvents.map((event, i) => (
              <Reveal key={event.id} delay={i * 0.06}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artists strip */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-sans text-[11px] tracking-[0.35em] text-white/40 uppercase">
                  Lineup
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-[-0.02em] text-white/95 md:text-5xl">
                  Artists
                </h2>
              </div>
              <Link
                href="/artists"
                className="font-sans text-[11px] tracking-[0.22em] text-white/50 uppercase transition-colors duration-500 hover:text-white"
              >
                Full roster →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeArtists.map((artist, i) => (
              <Reveal key={artist.id} delay={i * 0.06}>
                <Link href="/artists" className="group block">
                  <div className="placeholder-media aspect-[3/4] w-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]" />
                  <h3 className="mt-4 font-display text-xl tracking-[-0.02em] text-white">
                    {artist.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-white/40">
                    {artist.role}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bookings CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <div className="glass-panel flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-xl">
                <p className="font-sans text-[11px] tracking-[0.35em] text-white/40 uppercase">
                  Private & brand
                </p>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] text-white md:text-4xl">
                  Bookings & private events
                </h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">
                  Planning a takeover, brand activation, or private night? Tell
                  us the date and room — we’ll shape the rest.
                </p>
              </div>
              <InkButton href="/contact">Start a booking</InkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
