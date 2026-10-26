type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 font-sans text-[11px] tracking-[0.35em] text-white/45 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
        <span className={`title-highlight ${titleClassName}`}>{title}</span>
      </h1>
      {description ? (
        <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-white/55 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
