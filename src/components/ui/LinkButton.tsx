import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Opens in a new tab with rel="noopener noreferrer" */
  external?: boolean;
  /** Sets the download attribute (used for the CV) */
  download?: boolean;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-accent text-accent-fg hover:bg-accent/90",
  secondary:
    "border border-border-strong bg-bg text-fg hover:border-accent hover:text-accent",
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  external,
  download,
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}
