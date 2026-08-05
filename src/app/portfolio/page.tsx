import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  { id: 1, title: "Project One", meta: "Year · Category", tall: true },
  { id: 2, title: "Project Two", meta: "Year · Category", tall: false },
  { id: 3, title: "Project Three", meta: "Year · Category", tall: false },
  { id: 4, title: "Project Four", meta: "Year · Category", tall: true },
  { id: 5, title: "Project Five", meta: "Year · Category", tall: false },
  { id: 6, title: "Project Six", meta: "Year · Category", tall: false },
];

export default function PortfolioPage() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            description="Large media frames for stills, films, and campaign moments."
          />
        </Reveal>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 md:mt-24">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05} className="mb-6 break-inside-avoid">
              <article className="group">
                <div
                  className={`placeholder-media w-full transition-transform duration-700 group-hover:scale-[1.015] ${
                    project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-xl tracking-[-0.02em] text-white">
                    {project.title}
                  </h2>
                  <p className="font-sans text-[11px] tracking-[0.18em] text-white/35 uppercase">
                    {project.meta}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
