"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { AnimatePresence, motion, type Transition, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import type { ProjectImage } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
  priority?: boolean;
  projectTitle?: string;
};

export function ProjectGallery({ images, priority = false, projectTitle }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const selectedImage = images[selectedIndex] ?? images[0];

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (images.length > 1 && event.key === "ArrowLeft") {
        setSelectedIndex((current) => (current - 1 + images.length) % images.length);
      }

      if (images.length > 1 && event.key === "ArrowRight") {
        setSelectedIndex((current) => (current + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isLightboxOpen]);

  if (!selectedImage) {
    return null;
  }

  const changeImage = (direction: -1 | 1) => {
    setSelectedIndex((current) => (current + direction + images.length) % images.length);
  };

  const transition: Transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeOut" };

  return (
    <>
      <div className="overflow-hidden rounded-2xl border bg-[color:color-mix(in_srgb,var(--surface)_80%,var(--background))] p-2.5 shadow-[0_1.5rem_4rem_color-mix(in_srgb,var(--background)_82%,transparent)] transition-colors duration-200 group-hover:border-[color:color-mix(in_srgb,var(--accent)_38%,var(--border))] sm:p-3">
        <div className="overflow-hidden rounded-xl border bg-[var(--background)]">
          <div className="flex h-9 items-center justify-between gap-3 border-b px-3">
            <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--muted-foreground)]">
              {projectTitle ?? "PROJECT SCREENSHOTS"}
            </span>
            <span className="font-mono text-[10px] text-[var(--accent)]">
              {String(selectedIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label={`Open ${selectedImage.alt} in full screen`}
            className="group/image relative block h-[15.5rem] w-full overflow-hidden bg-[color:color-mix(in_srgb,var(--background)_88%,black)] text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] sm:h-[22rem] lg:h-[25rem] xl:h-[28rem]"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={selectedImage.src}
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0 }}
                transition={transition}
                className="absolute inset-0"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  priority={priority}
                  sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 45vw, 100vw"
                  className="object-contain p-2 sm:p-3"
                />
              </motion.div>
            </AnimatePresence>
            <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-lg border border-[color:color-mix(in_srgb,var(--border)_75%,transparent)] bg-[color:color-mix(in_srgb,var(--background)_78%,transparent)] text-[var(--foreground)] opacity-0 transition-opacity duration-200 group-hover/image:opacity-100 group-focus-visible/image:opacity-100" aria-hidden="true">
              <Maximize2 size={16} />
            </span>
          </button>
        </div>

        {images.length > 1 ? (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={`${projectTitle ?? "Project"} screenshots`}>
            {images.map((image, index) => {
              const isSelected = index === selectedIndex;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View screenshot ${index + 1} of ${images.length}: ${image.alt}`}
                  aria-pressed={isSelected}
                  className={cn(
                    "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border bg-[var(--background)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:h-[4.5rem] sm:w-28",
                    isSelected
                      ? "border-[var(--accent)]"
                      : "border-[var(--border)] hover:border-[var(--muted-foreground)]",
                  )}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {isLightboxOpen ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${projectTitle ?? "Project"} screenshot viewer`}
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={transition}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={transition}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border bg-[var(--background)] shadow-2xl"
            >
              <div className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate font-mono text-[10px] tracking-[0.1em] text-[var(--muted-foreground)]">
                    {projectTitle ?? "PROJECT SCREENSHOTS"}
                  </p>
                  <p className="mt-1 text-sm text-[var(--foreground)]">
                    {selectedIndex + 1} of {images.length}
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close screenshot viewer"
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="relative min-h-0 flex-1 bg-black/20">
                <div className="relative h-[calc(100svh-8.25rem)] max-h-[52rem] min-h-[18rem] w-full">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={selectedImage.src}
                      initial={reducedMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={reducedMotion ? undefined : { opacity: 0 }}
                      transition={transition}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        fill
                        sizes="100vw"
                        className="object-contain p-3 sm:p-6"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {images.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => changeImage(-1)}
                      aria-label="Previous screenshot"
                      className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-[color:color-mix(in_srgb,var(--background)_85%,transparent)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:left-5 sm:size-11"
                    >
                      <ChevronLeft size={20} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => changeImage(1)}
                      aria-label="Next screenshot"
                      className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg border bg-[color:color-mix(in_srgb,var(--background)_85%,transparent)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:right-5 sm:size-11"
                    >
                      <ChevronRight size={20} aria-hidden="true" />
                    </button>
                  </>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
