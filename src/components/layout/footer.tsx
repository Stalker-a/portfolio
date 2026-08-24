import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t py-8 sm:py-10">
      <Container className="flex flex-col gap-2 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-[var(--foreground)]">{siteConfig.name}</p>
        <p>AI • Automation • Software</p>
        <p>© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
