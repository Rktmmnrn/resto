import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-5 text-center text-ink">
      <span className="font-display text-6xl text-gold">404</span>
      <h1 className="font-display text-2xl uppercase sm:text-3xl">page not found</h1>
      <p className="max-w-sm text-sm text-ink/70">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved.
      </p>
      <Button href="/" variant="ink">
        back to home
      </Button>
    </section>
  );
}
