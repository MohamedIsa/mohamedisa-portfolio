import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

interface SectionProps {
  id: string;
  /** Two-digit index shown beside the heading, e.g. "01" */
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  index,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("py-20 sm:py-24", className)}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="mb-10 flex items-baseline gap-3 text-2xl font-semibold tracking-tight sm:mb-12 sm:text-3xl"
          >
            <span className="font-mono text-sm font-normal text-accent">
              {index}
            </span>
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
