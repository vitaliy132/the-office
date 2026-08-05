import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation"
            description="Wire this form to your inbox later. Fields are ready to customize."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 md:mt-24">
          <Reveal className="lg:col-span-5">
            <div className="glass-panel space-y-8 p-6 md:p-8">
              <div>
                <p className="font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                  Email
                </p>
                <p className="mt-2 font-display text-2xl text-white">
                  hello@theoffice.example
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                  Location
                </p>
                <p className="mt-2 font-display text-2xl text-white">
                  Your City
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                  Social
                </p>
                <p className="mt-2 font-sans text-sm text-white/50">
                  Instagram · X · YouTube
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form
              className="glass-panel space-y-6 p-6 md:p-8"
              action="#"
              method="post"
            >
              <label className="block">
                <span className="font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-3 w-full border-b border-white/20 bg-transparent py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/70"
                />
              </label>
              <label className="block">
                <span className="font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-3 w-full border-b border-white/20 bg-transparent py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/70"
                />
              </label>
              <label className="block">
                <span className="font-sans text-[11px] tracking-[0.28em] text-white/40 uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or booking"
                  className="mt-3 w-full resize-none border-b border-white/20 bg-transparent py-3 font-sans text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/70"
                />
              </label>
              <button
                type="submit"
                className="group relative mt-4 inline-flex overflow-hidden border border-white/40 bg-white/85 px-8 py-3.5 font-sans text-[11px] tracking-[0.28em] text-black uppercase backdrop-blur-md"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                <span className="relative z-10">Send message</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
