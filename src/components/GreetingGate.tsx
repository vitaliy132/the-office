import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { upcomingEvents } from "@/lib/events";

function gateDate(date: string) {
  const [day, month] = date.split("/");
  if (!day || !month || Number.isNaN(Number(day))) return date;
  return `${day.padStart(2, "0")}.${month.padStart(2, "0")}`;
}

export function GreetingGate() {
  const nights = upcomingEvents.filter((event) => !event.announce);

  return (
    <section className="bg-black text-white lg:h-svh lg:overflow-hidden">
      <div className="grid min-h-svh lg:h-full lg:grid-cols-2">
        <div className="relative order-1 min-h-[32vh] sm:min-h-[38vh] lg:order-2 lg:min-h-0">
          <Image
            src="/portfolio/LB-FreedomMillsTheOffice-9161.jpg"
            alt="Crowd at The Office, Freedom Mills, Leeds"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_42%]"
          />
        </div>

        <div className="order-2 flex flex-col px-5 py-6 sm:px-8 lg:order-1 lg:min-h-0 lg:px-10 lg:py-9">
          <LogoMark
            size="custom"
            priority
            className="mx-auto mt-2 h-auto w-[min(52%,210px)]"
          />

          <h1 className="mt-6 text-center font-medium leading-[0.92] tracking-[-0.04em] text-white sm:mt-10">
            <span className="block text-[clamp(2.8rem,5.4vw,5.15rem)]">
              Born in Leeds
            </span>
            <span className="mx-auto mt-3 block max-w-[12em] text-[clamp(1.35rem,2.05vw,2rem)] leading-[1.05] tracking-[-0.03em] text-balance">
              Clock into your next rave.
            </span>
          </h1>

          <div className="mt-auto pt-8 lg:pt-12">
            <ul className="flex flex-col gap-[0.7rem] font-sans text-[13px] leading-none text-white sm:text-sm">
              {nights.map((event) => (
                <li
                  key={event.id}
                  className="grid grid-cols-[3.15rem_minmax(0,1fr)_auto] items-baseline gap-x-3 sm:grid-cols-[3.4rem_minmax(0,1.15fr)_minmax(0,1.15fr)_auto] sm:gap-x-4"
                >
                  <span className="tabular-nums">{gateDate(event.date)}</span>
                  <span className="min-w-0">
                    <span className="block">{event.title}</span>
                    <span className="mt-1 block text-white/70 sm:hidden">
                      {event.venue}, {event.city}
                    </span>
                  </span>
                  <span className="hidden sm:block">
                    {event.venue}, {event.city}
                  </span>
                  <Link
                    href="/tickets"
                    className="justify-self-end transition-opacity hover:opacity-60"
                  >
                    Tickets
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/home"
              className="mt-6 flex h-12 items-center justify-center bg-white text-[12px] font-medium tracking-[0.28em] text-black uppercase transition-colors hover:bg-neutral-200"
            >
              Enter Site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
