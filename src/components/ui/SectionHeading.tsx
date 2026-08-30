interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-3 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      <h3
        className={`flex items-center gap-4 font-body text-sm font-normal uppercase tracking-wide ${
          tone === "light" ? "text-ink" : "text-white"
        } ${
          isCenter
            ? "before:h-px before:w-10 before:bg-gold after:h-px after:w-10 after:bg-gold"
            : "after:h-px after:w-10 after:bg-gold"
        }`}
      >
        {eyebrow}
      </h3>
      <h2
        className={`font-display text-2xl uppercase sm:text-3xl lg:text-4xl ${
          tone === "light" ? "text-ink" : "text-gold"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
