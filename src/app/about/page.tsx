import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoMark } from "@/components/LogoMark";

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="About Us"
            title="About The Office"
            description="Leeds-born DJ collective and events company"
          />
        </Reveal>

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
