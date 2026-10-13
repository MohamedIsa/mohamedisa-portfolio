import { projects } from "@/data/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/icons";

const cardLink =
  "inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent";

export default function ProjectsSection() {
  return (
    <Section id="projects" index="03" title="Projects">
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.name}
            delay={i * 80}
            className="flex flex-col rounded-lg border border-border bg-bg-subtle/60 p-6 transition-colors hover:border-border-strong"
          >
            <article className="flex h-full flex-col">
              <header className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="shrink-0 font-mono text-xs text-fg-muted">
                  <time>{project.start}</time> – <time>{project.end}</time>
                </p>
              </header>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                {project.description}
              </p>

              <ul
                className="mt-5 flex flex-wrap gap-1.5"
                aria-label="Technologies"
              >
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-border px-2 py-0.5 font-mono text-xs text-fg-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <footer className="mt-5 flex gap-5 border-t border-border pt-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardLink}
                  >
                    <ExternalLinkIcon size={15} />
                    Live
                    <span className="sr-only"> demo of {project.name}</span>
                  </a>
                )}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardLink}
                >
                  <GitHubIcon size={15} />
                  Source
                  <span className="sr-only"> code for {project.name}</span>
                </a>
              </footer>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
