import { education, profile } from "@/data/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  const facts = [
    { label: "Location", value: profile.location },
    {
      label: "Education",
      value: `${education.degree}, ${education.school}`,
      meta: `${education.start} – ${education.end}`,
    },
    { label: "Languages", value: profile.languages.join(", ") },
  ];

  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-10 md:grid-cols-5 md:gap-14">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-fg-muted">
            {profile.about}
          </p>
        </Reveal>
        <Reveal delay={100} className="md:col-span-2">
          <dl className="divide-y divide-border border-y border-border">
            {facts.map((fact) => (
              <div key={fact.label} className="py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed">
                  {fact.value}
                  {fact.meta && (
                    <span className="mt-0.5 block font-mono text-xs text-fg-muted">
                      {fact.meta}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
