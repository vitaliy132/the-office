import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/lib/events";

type EventCardProps = {
  event: EventItem;
  className?: string;
};

export function EventCard({ event, className = "" }: EventCardProps) {
  return (
    <article
      className={`glass-panel group flex h-full flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.08] ${className}`}
    >
      {event.announce ? (
        <div className="flex aspect-[4/5] w-full items-center justify-center border-b border-white/10 px-6">
          <p className="text-center font-display text-4xl leading-none tracking-[-0.03em] text-white/80">
            TBA
          </p>
        </div>
      ) : event.image ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={event.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="placeholder-media aspect-[4/3] w-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]" />
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start gap-4">
          {event.announce ? null : (
            <div className="flex min-w-14 flex-col items-center border border-white/15 bg-white/[0.04] px-2 py-2.5 backdrop-blur-md">
              <span className="font-sans text-[10px] tracking-[0.2em] text-white/45 uppercase">
                {event.month}
              </span>
              <span className="mt-0.5 font-display text-2xl leading-none text-white">
                {event.day}
              </span>
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl tracking-[-0.02em] text-white md:text-[1.7rem]">
              {event.title}
            </h3>
            <p className="mt-1.5 font-sans text-sm text-white/45">
              {event.announce ? event.blurb : `${event.venue} · ${event.city}`}
            </p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4 mt-6">
          <span className="font-sans text-[11px] tracking-[0.18em] text-white/35 uppercase">
            {event.date}
          </span>
          {event.announce ? null : (
            <Link
              href="/tickets"
              className="font-sans text-[11px] tracking-[0.22em] text-white/70 uppercase transition-colors duration-500 hover:text-white"
            >
              Get tickets →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
