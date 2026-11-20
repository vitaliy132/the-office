import Image from "next/image";

type LogoMarkProps = {
  size?: "sm" | "md" | "lg" | "hero" | "custom";
  className?: string;
  priority?: boolean;
  alt?: string;
};

const intrinsic = { width: 635, height: 393 };

const sizes = {
  sm: { className: "h-9", style: { width: "auto" }, ...intrinsic },
  md: { className: "h-12", style: { width: "auto" }, ...intrinsic },
  lg: { className: "h-20 sm:h-24", style: { width: "auto" }, ...intrinsic },
  hero: {
    className: "w-[min(78vw,520px)]",
    style: { height: "auto" },
    ...intrinsic,
  },
  custom: { className: "", style: undefined, ...intrinsic },
};

export function LogoMark({
  size = "sm",
  className = "",
  priority = false,
  alt = "The Office",
}: LogoMarkProps) {
  const dims = sizes[size];

  return (
    <Image
      src="/brand/logo.png"
      alt={alt}
      width={dims.width}
      height={dims.height}
      priority={priority}
      style={dims.style}
      className={`object-contain ${dims.className} ${className}`}
    />
  );
}
