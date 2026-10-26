import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoMark } from "@/components/LogoMark";

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading title="About The Office" />
        </Reveal>

        <div className="mt-6 max-w-4xl font-sans text-white/55 sm:text-base">
          <p className="text-[15px] leading-relaxed text-white/55 sm:text-base">
            Leeds-born DJ collective and events company
          </p>
          <p className="mt-8 text-[1.05rem] leading-[1.75] text-white sm:text-[1.125rem]">
            What started as a simple idea to support grassroots music, and create meaningful opportunities for emerging artists, has now grown into a collective passionate about community, creativity, and connection.
          </p>
          <p className="mt-7 text-[1.05rem] leading-[1.75] text-white sm:text-[1.125rem]">
            At The Office we host intimate, high-energy events that bring people together through sound, atmosphere, and shared experience.
          </p>
          <p className="mt-7 text-[1.05rem] leading-[1.75] text-white sm:text-[1.125rem]">
            Our nights are carefully curated to appeal to both long-time fans of the genres we promote and those discovering them for the first time. Alongside our own events, we collaborate with other collectives, brands, and creatives to strengthen the local scene and give artists a platform to grow.
          </p>
          <p className="mt-7 text-[1.05rem] leading-[1.75] text-white sm:text-[1.125rem]">
            At the heart of The Office is our ethos: inclusivity, community, and creativity. We strive to create safe, welcoming spaces where everyone - artists, audience, and staff - feels represented and valued.
          </p>
          <p className="mt-7 text-[1.05rem] leading-[1.75] text-white sm:text-[1.125rem]">
            From working with local designers and small businesses on our branding to partnering with Leeds-based photographers and videographers, we make sure our work reflects and uplifts the community around us.
          </p>
          <p className="mt-7 text-[1.05rem] leading-[1.75] text-white sm:text-[1.125rem]">
            Our goal is simple: to support artists, celebrate culture, and make every Office event an unforgettable experience. One that leaves people feeling part of something bigger.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <div className="placeholder-media aspect-[16/10] w-full" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="glass-panel flex h-full flex-col justify-between gap-8 p-6 md:p-8">
              <LogoMark size="lg" />
              <div className="space-y-4 font-sans text-sm leading-relaxed text-white/50">
                <p className="placeholder-block min-h-24 p-4">
                  {/* Paragraph 1 */}
                  Long-form copy block. Drop your manifesto here.
                </p>
                <p className="placeholder-block min-h-24 p-4">
                  {/* Paragraph 2 */}
                  Second copy block for values, history, or vision.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
