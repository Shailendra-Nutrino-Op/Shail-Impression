import { profile, projects } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";
import { ProjectDetail } from "./ProjectDetail";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="shell section-y">
      <SectionHeading id="projects-title" number="04" label="Projects" title="Selected work" />
      <div className="mt-12 space-y-16">
        {projects.map((p) => (
          <ProjectDetail key={p.index} project={p} />
        ))}
      </div>
      <p className="meta mt-14 border-t border-dashed border-border pt-5 text-muted-foreground">
        See more of my work on{" "}
        <ExternalLink href={profile.github} className="link-rule text-foreground hover:text-accent-ink">
          GitHub
        </ExternalLink>
        .
      </p>
    </section>
  );
}
