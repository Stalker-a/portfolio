"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/data/site";

const navigationItems = [
  { anchor: "#services", label: "Services" },
  { anchor: "#projects", label: "Projects" },
  { anchor: "#process", label: "Process" },
  { anchor: "#about", label: "About" },
  { anchor: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
  const getNavigationHref = (anchor: string) => (pathname === "/" ? anchor : `/${anchor}`);

  return (
    <header className="sticky top-0 z-50 border-b bg-[color:color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex min-h-18 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.08em] text-[var(--foreground)]"
          aria-label={`${siteConfig.name}, home`}
          onClick={closeMenu}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a
              key={item.anchor}
              href={getNavigationHref(item.anchor)}
              className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border text-[var(--foreground)] transition-colors hover:border-[var(--muted-foreground)] lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden border-t lg:hidden"
          >
            <nav
              className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
              aria-label="Mobile navigation"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.anchor}
                  href={getNavigationHref(item.anchor)}
                  className="rounded-lg px-3 py-3 text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
