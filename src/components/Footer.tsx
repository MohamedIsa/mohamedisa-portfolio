import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-8 font-mono text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          {profile.headline} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
