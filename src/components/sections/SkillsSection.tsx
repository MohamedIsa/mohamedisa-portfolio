import { skills } from "@/data/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function SkillsSection() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="space-y-8">
        {skills.map((group, i) => (
          <Reveal
            key={group.label}
            delay={i * 60}
            className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-fg-muted sm:pt-1.5">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-bg-subtle px-3 py-1.5 text-sm text-fg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
