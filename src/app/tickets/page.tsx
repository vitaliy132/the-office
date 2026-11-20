import Link from "next/link";
import { WorshipPanel } from "@/components/WorshipPanel";
import { upcomingEvents } from "@/lib/events";

const tiers = [
  { name: "General Admission", price: "—", note: "Entry · add price & doors" },
  { name: "VIP", price: "—", note: "Fast track · lounge access" },
  { name: "Table", price: "—", note: "Bottle service · group booking" },
];

const requestClass =
  "block border border-black px-[2em] py-[10px] text-center leading-[2.5em] uppercase transition-colors duration-300 ease-linear hover:bg-black hover:text-white";

export default function TicketsPage() {
  const ticketEvent =
    upcomingEvents.find((event) => event.image) ?? upcomingEvents[0];

  return (
    <WorshipPanel currentHref="/tickets">
      <table className="w-full border-separate border-spacing-[10px] text-[10px] leading-none">
        <tbody>
          <tr>
            <td className="w-[1%] border border-black p-[5px] text-center align-middle whitespace-nowrap uppercase">
              <span className="my-[0.1em] block text-[14px] leading-none">
                {ticketEvent.day}
              </span>
              {ticketEvent.month}
            </td>
            <td className="align-middle">
              <span className="my-[0.1em] block text-[14px] leading-none uppercase">
                {ticketEvent.title}
              </span>
              {ticketEvent.venue}, {ticketEvent.city}
            </td>
            <td />
          </tr>
          {tiers.map((tier) => (
            <tr key={tier.name}>
              <td />
              <td className="align-middle">
                <span className="my-[0.1em] block text-[14px] leading-none uppercase">
                  {tier.name}
                </span>
                {tier.note}
                <span className="mt-1 block">{tier.price}</span>
              </td>
              <td className="w-[1%] align-middle whitespace-nowrap">
                <Link href="/contact" className={requestClass}>
                  Request
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </WorshipPanel>
  );
}
