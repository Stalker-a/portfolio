import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center py-12">
      <Container>
        <p className="font-mono text-sm tracking-[0.14em] text-[var(--accent)]">404</p>
        <h1 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted-foreground)]">
          The page you requested does not exist or may have moved.
        </p>
        <Button href="/" className="mt-8">
          Back Home
        </Button>
      </Container>
    </main>
  );
}
