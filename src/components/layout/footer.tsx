import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: siteConfig.telegram, label: "Telegram" },
  { href: siteConfig.github, label: "GitHub" },
].filter((link): link is { href: string; label: string } => Boolean(link.href));

export function Footer() {
  return (
    <footer className="border-t py-8 sm:py-10">
      <Container className="flex flex-col gap-2 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-[var(--foreground)]">{siteConfig.name}</p>
        <p>AI • Automation • Software</p>
        {footerLinks.length > 0 ? (
          <nav aria-label="Contact links" className="flex gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
        <p>© {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
