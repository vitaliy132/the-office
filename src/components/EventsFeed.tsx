"use client";

import Link from "next/link";
import {
  CornerHeader,
  cornerListClass,
  cornerListStyle,
} from "@/components/CornerHeader";
import type { EventItem } from "@/lib/events";

export function EventsFeed({ events }: { events: EventItem[] }) {
  return (
    <div className="relative min-h-svh bg-white text-black">
      <CornerHeader currentHref="/events" />

      <div
        className={`fixed right-5 bottom-5 left-5 z-10 md:right-[75px] md:bottom-[75px] md:left-auto md:min-w-[55%] ${cornerListClass}`}
        style={cornerListStyle()}
      >
        <table className="w-full border-separate border-spacing-[10px] text-[10px] leading-none">
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td className="w-[1%] border border-black p-[5px] text-center align-middle whitespace-nowrap uppercase">
                  <span className="my-[0.1em] block text-[14px] leading-none">
                    {event.day}
                  </span>
                  {event.month}
                </td>
                <td className="align-middle">
                  <span className="my-[0.1em] block text-[14px] leading-none uppercase">
                    {event.title}
                  </span>
                  {event.announce
                    ? event.blurb
                    : `${event.venue}, ${event.city}`}
                </td>
                <td className="w-[1%] align-middle whitespace-nowrap">
                  {event.announce ? null : (
                    <Link
                      href="/tickets"
                      className="block border border-black px-[2em] py-[10px] text-center leading-[2.5em] uppercase transition-colors duration-300 ease-linear hover:bg-black hover:text-white"
                    >
                      Tickets
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
