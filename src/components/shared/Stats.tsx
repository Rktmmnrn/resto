import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "240", label: "client everyday" },
  { value: "180", label: "great moments" },
  { value: "05", label: "prestigious award" },
  { value: "23", label: "year of operation" },
];

type StatsProps = {
  variant?: "home" | "about";
};

export function Stats({ variant = "about" }: StatsProps) {
  const styles = {
    home: "bg-ink",
    about: "bg-tranparent",
  }
  const stylesParagraph = {
    home: "text-white",
    about: "text-ink",
  }
  const borders = {
    home: "",
    about: "border-t",
  }

  return (
    <section className={`${styles[variant]} ${borders[variant]} text-gold px-5 py-16 md:px-16 lg:py-20`}>
      <div className="mx-auto grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-0">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className="relative flex flex-col items-center gap-3 text-center justify-center"
          >
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl">{stat.value}</span>
            <p className={`${stylesParagraph[variant]} text-xs uppercase sm:text-lg font-light`}>{stat.label}</p>
            {i !== stats.length - 1 && (
              <span className={`absolute w-3 h-3 md:w-4 md:h-4 bg-gold lg:right-auto lg:translate-x-33 lg:translate-y-0 rotate-45 lg:flex
                ${i == 0 ? "block right-0 translate-y-15" : "hidden" }`}></span>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
