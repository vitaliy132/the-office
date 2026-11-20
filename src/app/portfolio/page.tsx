import Image from "next/image";
import { WorshipPanel } from "@/components/WorshipPanel";

const portfolioItems = [
  { id: 1, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8400.jpg", tall: true },
  { id: 11, title: "House Party", meta: "Secret Location, Leeds 2026", image: "/portfolio/LB-THEOFFICE-0397.jpg", tall: false },
  { id: 17, title: "House Party 2.0", meta: "Secret Location, Leeds 2026", image: "/portfolio/WhatsApp Image 2026-05-14 at 16.42.31.jpeg", tall: false },
  { id: 2, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8402.jpg", tall: false },
  { id: 12, title: "House Party", meta: "Secret Location, Leeds 2026", image: "/portfolio/LB-THEOFFICE-0456.jpg", tall: false },
  { id: 3, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8618-2.jpg", tall: false },
  { id: 18, title: "House Party 2.0", meta: "Secret Location, Leeds 2026", image: "/portfolio/WhatsApp Image 2026-05-14 at 16.42.34 (1).jpeg", tall: false },
  { id: 4, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8678.jpg", tall: true },
  { id: 13, title: "House Party", meta: "Secret Location, Leeds 2026", image: "/portfolio/LB-THEOFFICE-0491.jpg", tall: true },
  { id: 5, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8887.jpg", tall: false },
  { id: 14, title: "House Party", meta: "Secret Location, Leeds 2026", image: "/portfolio/LB-THEOFFICE-0518.jpg", tall: false },
  { id: 6, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8941-2.jpg", tall: false },
  { id: 19, title: "House Party 2.0", meta: "Secret Location, Leeds 2026", image: "/portfolio/WhatsApp Image 2026-05-14 at 16.42.41.jpeg", tall: true },
  { id: 7, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8941.jpg", tall: true },
  { id: 15, title: "House Party", meta: "Secret Location, Leeds 2026", image: "/portfolio/LB-THEOFFICE-0701.jpg", tall: false },
  { id: 8, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-8978.jpg", tall: false },
  { id: 16, title: "House Party", meta: "Secret Location, Leeds 2026", image: "/portfolio/LB-THEOFFICE-0751.jpg", tall: true },
  { id: 9, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-9014.jpg", tall: false },
  { id: 10, title: "File #001", meta: "Freedom Mills, Leeds - 2025", image: "/portfolio/LB-FreedomMillsTheOffice-9161.jpg", tall: true },
];

export default function PortfolioPage() {
  return (
    <WorshipPanel currentHref="/portfolio">
      <ul className="flex flex-col gap-[10px] px-[10px] pb-2">
        {portfolioItems.map((project) => (
          <li key={project.id}>
            <div
              className={`relative w-full ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-[14px] leading-none uppercase">
              {project.title}
            </p>
            <p className="mt-1 text-[10px] leading-none">{project.meta}</p>
          </li>
        ))}
      </ul>
    </WorshipPanel>
  );
}
