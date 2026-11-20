import { WorshipPanel } from "@/components/WorshipPanel";

export default function AboutPage() {
  return (
    <WorshipPanel currentHref="/about">
      <div className="px-[10px] pb-2 text-[10px] leading-[1.6]">
        <p className="text-[14px] leading-none uppercase">
          Leeds-born DJ collective and events company
        </p>
        <p className="mt-6">
          What started as a simple idea to support grassroots music, and
          create meaningful opportunities for emerging artists, has now grown
          into a collective passionate about community, creativity, and
          connection.
        </p>
        <p className="mt-4">
          At The Office we host intimate, high-energy events that bring people
          together through sound, atmosphere, and shared experience.
        </p>
        <p className="mt-4">
          Our nights are carefully curated to appeal to both long-time fans of
          the genres we promote and those discovering them for the first time.
          Alongside our own events, we collaborate with other collectives,
          brands, and creatives to strengthen the local scene and give artists
          a platform to grow.
        </p>
        <p className="mt-4">
          At the heart of The Office is our ethos: inclusivity, community, and
          creativity. We strive to create safe, welcoming spaces where everyone
          - artists, audience, and staff - feels represented and valued.
        </p>
        <p className="mt-4">
          From working with local designers and small businesses on our
          branding to partnering with Leeds-based photographers and
          videographers, we make sure our work reflects and uplifts the
          community around us.
        </p>
        <p className="mt-4">
          Our goal is simple: to support artists, celebrate culture, and make
          every Office event an unforgettable experience. One that leaves
          people feeling part of something bigger.
        </p>
      </div>
    </WorshipPanel>
  );
}
