import { experience, type Bullet, type BulletGroup } from "@/data/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

/** Groups bullets in first-seen order; ungrouped bullets go under `null`. */
function groupBullets(bullets: Bullet[]) {
  const groups = new Map<BulletGroup | null, string[]>();
  for (const bullet of bullets) {
    const key = bullet.group ?? null;
    const list = groups.get(key) ?? [];
    list.push(bullet.text);
    groups.set(key, list);
  }
  return Array.from(groups.entries());
}

export default function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative border-l border-border">
        {experience.map((role, i) => {
          const groups = groupBullets(role.bullets);
          const hasGroups = groups.some(([key]) => key !== null);

          return (
            <Reveal
              as="li"
              key={`${role.company}-${role.start}`}
              delay={i * 80}
              className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
            >
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-accent bg-bg"
              />

              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {role.role}
                  </h3>
                  <p className="text-fg-muted">{role.company}</p>
                </div>
                <p className="font-mono text-xs text-fg-muted sm:text-sm">
                  <time>{role.start}</time> – <time>{role.end}</time>
                </p>
              </header>

              <div className="mt-5 space-y-5">
                {groups.map(([group, items]) => (
                  <div key={group ?? "default"}>
                    {hasGroups && group && (
                      <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                        {group}
                      </h4>
                    )}
                    <ul className="space-y-2.5">
                      {items.map((text) => (
                        <li
                          key={text}
                          className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-border-strong"
                          />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
