import { profile } from "@/data/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import LinkButton from "@/components/ui/LinkButton";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

const textLink =
  "inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent";

export default function ContactSection() {
  return (
    <Section id="contact" index="05" title="Contact">
      <Reveal>
        <div className="rounded-lg border border-border bg-bg-subtle/60 p-6 sm:p-10">
          <p className="max-w-xl text-lg leading-relaxed text-fg-muted">
            The quickest way to reach me is email. You can also find me on
            GitHub and LinkedIn.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={`mailto:${profile.email}`}>
              <MailIcon size={16} />
              {profile.email}
            </LinkButton>
            <LinkButton href={profile.cvPath} variant="secondary" download>
              <DownloadIcon size={16} />
              Download CV
            </LinkButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              <GitHubIcon size={16} />
              {profile.github.replace("https://", "")}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              <LinkedInIcon size={16} />
              {profile.linkedin.replace("https://www.", "")}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
