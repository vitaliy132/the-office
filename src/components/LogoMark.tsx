import Image from "next/image";

type LogoMarkProps = {
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { className: "h-9 w-auto", width: 72, height: 36 },
  md: { className: "h-12 w-auto", width: 112, height: 56 },
  lg: { className: "h-20 w-auto sm:h-24", width: 200, height: 100 },
  hero: {
    className: "h-auto w-[min(78vw,520px)]",
    width: 720,
    height: 360,
  },
};

export function LogoMark({
  size = "sm",
  className = "",
  priority = false,
}: LogoMarkProps) {
  const dims = sizes[size];

  return (
    <Image
      src="/brand/logo.png"
      alt="The Office"
      width={dims.width}
      height={dims.height}
      priority={priority}
      className={`object-contain ${dims.className} ${className}`}
    />
  );
}
