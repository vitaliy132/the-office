import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const portfolioItems = [
  { id: 1, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8400.jpg", tall: true },
  { id: 2, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8402.jpg", tall: false },
  { id: 3, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8618-2.jpg", tall: false },
  { id: 4, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8678.jpg", tall: true },
  { id: 5, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8887.jpg", tall: false },
  { id: 6, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8941-2.jpg", tall: false },
  { id: 7, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8941.jpg", tall: true },
  { id: 8, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8978.jpg", tall: false },
  { id: 9, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-9014.jpg", tall: false },
  { id: 10, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-9161.jpg", tall: true },
  { id: 11, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-THEOFFICE-0397.jpg", tall: false },
  { id: 12, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-THEOFFICE-0456.jpg", tall: false },
  { id: 13, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-THEOFFICE-0491.jpg", tall: true },
  { id: 14, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-THEOFFICE-0518.jpg", tall: false },
  { id: 15, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-THEOFFICE-0701.jpg", tall: false },
  { id: 16, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-THEOFFICE-0751.jpg", tall: true },
  { id: 17, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/WhatsApp Image 2026-05-14 at 16.42.31.jpeg", tall: false },
  { id: 18, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/WhatsApp Image 2026-05-14 at 16.42.34 (1).jpeg", tall: false },
  { id: 19, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/WhatsApp Image 2026-05-14 at 16.42.41.jpeg", tall: true },
];

const mixedPortfolioItems = [...portfolioItems].sort((a, b) => {
  const seedA = (a.id * 9301 + 49297) % 233280;
  const seedB = (b.id * 9301 + 49297) % 233280;
  return seedA - seedB;
});

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
          {mixedPortfolioItems.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05} className="mb-6 break-inside-avoid">
              <article className="group">
                <div className={`relative overflow-hidden bg-white/5 ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </div>
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
