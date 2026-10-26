import Image from "next/image";

export function BrandBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src="/brand/LB-FreedomMillsTheOffice-8809-2.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_62%]"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
