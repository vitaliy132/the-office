import Image from "next/image";
import { InkButton } from "@/components/InkButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { upcomingEvents } from "@/lib/events";

const tiers = [
  { name: "General Admission", price: "—", note: "Entry · add price & doors" },
  { name: "VIP", price: "—", note: "Fast track · lounge access" },
  { name: "Table", price: "—", note: "Bottle service · group booking" },
];

export default function TicketsPage() {
  const ticketEvent =
    upcomingEvents.find((event) => event.image) ?? upcomingEvents[0];
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading
            title="Secure your tickets"
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 md:mt-24">
          <Reveal className="lg:col-span-7">
            <div className="glass-panel overflow-hidden">
              {ticketEvent.image ? (
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={ticketEvent.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex min-w-16 flex-col items-center border border-white/15 bg-white/[0.04] px-3 py-3">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-white/45 uppercase">
                      {ticketEvent.month}
                    </span>
                    <span className="mt-1 font-display text-3xl leading-none text-white">
                      {ticketEvent.day}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.22em] text-white/40 uppercase">
                      On sale now
                    </p>
                    <p className="mt-1 font-sans text-sm text-white/50">
                      {ticketEvent.venue} · {ticketEvent.city}
                    </p>
                  </div>
                </div>
                <h2 className="mt-8 font-display text-3xl tracking-[-0.02em] text-white md:text-5xl">
                  <span className="title-highlight">{ticketEvent.title}</span>
                </h2>
                <p className="mt-3 font-sans text-sm text-white/45">
                  {ticketEvent.date}
                </p>
                <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/50">
                  {ticketEvent.blurb}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <Reveal>
              <p className="mb-2 font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                Select tier
              </p>
            </Reveal>
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div className="glass-panel flex items-center justify-between px-6 py-7 transition-all duration-500 hover:bg-white/[0.08]">
                  <div>
                    <h3 className="font-display text-2xl text-white">
                      <span className="title-highlight">{tier.name}</span>
                    </h3>
                    <p className="mt-1 font-sans text-sm text-white/40">
                      {tier.note}
                    </p>
                  </div>
                  <span className="font-display text-2xl text-white/70">
                    {tier.price}
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <InkButton href="/contact" className="mt-2 w-full justify-center">
                Request tickets
              </InkButton>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
