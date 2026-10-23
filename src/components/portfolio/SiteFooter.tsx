import { profile } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">{profile.name}</p>
          <p className="meta mt-1 text-ink-muted">{profile.title}</p>
        </div>
        <ul className="meta flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <ExternalLink href={profile.linkedin} className="link-rule hover:text-accent">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.github} className="link-rule hover:text-accent">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className="link-rule hover:text-accent">
              Email
            </a>
          </li>
        </ul>
        <p className="meta text-ink-muted">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
