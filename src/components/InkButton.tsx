import Link from "next/link";

type InkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function InkButton({
  href,
  children,
  variant = "solid",
  className = "",
}: InkButtonProps) {
  const base =
    "group relative inline-flex overflow-hidden px-7 py-3.5 font-sans text-[11px] tracking-[0.28em] uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md";

  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`${base} border border-white/30 bg-white/[0.03] text-white hover:border-white/60 hover:bg-white/[0.08] ${className}`}
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-white/90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} border border-white/40 bg-white/85 text-black hover:bg-white ${className}`}
    >
      <span className="absolute inset-0 origin-left scale-x-0 bg-white/10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
