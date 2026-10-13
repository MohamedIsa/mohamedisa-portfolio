import type { CSSProperties } from "react";
import { focusAreas, profile } from "@/data/profile";
import LinkButton from "@/components/ui/LinkButton";
import {
  ArrowDownIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons";

const iconLink =
  "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent";

/** CSS-only stagger; see .enter in globals.css */
const enterDelay = (ms: number) =>
  ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export default function HeroSection() {
  // First sentence of the About text; the rest is covered by focusAreas.
  const tagline = profile.about.split(". ")[0] + ".";

  return (
    <section id="top" aria-label="Introduction" className="py-20 sm:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="enter">
          <p className="mb-5 flex items-center gap-2 font-mono text-sm text-fg-muted">
            <MapPinIcon size={14} className="text-accent" />
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-2xl font-medium text-accent sm:text-3xl">
            {profile.headline}
          </p>
        </div>

        <div className="enter" style={enterDelay(100)}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {tagline}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-md border border-border bg-bg-subtle px-3 py-1.5 font-mono text-xs text-fg"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="enter" style={enterDelay(200)}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href={profile.cvPath} download>
              <DownloadIcon size={16} />
              Download CV
            </LinkButton>
            <LinkButton href="#experience" variant="secondary">
              View experience
              <ArrowDownIcon size={16} />
            </LinkButton>
            <div className="flex gap-2 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={iconLink}
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={iconLink}
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className={iconLink}
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
