import { EventCard } from "@/components/EventCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredEvent, upcomingEvents } from "@/lib/events";

export default function EventsPage() {
  const allEvents = [featuredEvent, ...upcomingEvents];

  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our Events"
            title="Nights on the calendar"
            description="Every date we put on — swap titles, venues, and artwork when you're ready."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
          {allEvents.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.05}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
