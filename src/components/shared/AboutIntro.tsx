import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutIntroProps {
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export function AboutIntro({ ctaLabel, ctaHref }: AboutIntroProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-3/4 lg:w-3/5 items-center justify-center gap-4">
        <SectionHeading
          eyebrow="about restaurant"
          title="our commitment to quality and taste"
          align="center"
          tone="light"
        />
        <p className="text-sm text-ink/80 sm:text-base text-center">
          Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
          placerat turpis. Ut ullamcorper condimentum tincidunt orci quis ullamcorper. Arcu ut
          tincidunt egestas mauris mi. Ultrices egestas rhoncus nec morbi sed pellentesque.
        </p>
        <p className="text-sm text-ink/80 sm:text-base">
          Tellus tellus in neque id. Mauris praesent consectetur orci porta ut elementum.
        </p>
        <Button href={ctaHref} variant="ink" className="mt-2">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
