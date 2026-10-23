import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

/** Reusable project write-up. Repo/demo links render only when real URLs are configured. */
export function ProjectDetail({ project }: { project: Project }) {
  const details = [
    { label: "Problem & purpose", body: project.problem },
    { label: "Implementation", body: project.implementation },
    ...(project.authentication
      ? [{ label: "Authentication", body: project.authentication }]
      : []),
  ];

  return (
    <article className="border-t border-rule pt-8" aria-labelledby={`project-${project.index}`}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-7xl font-semibold leading-none text-accent">
              {project.index}
            </span>
            <span className="eyebrow text-muted-foreground">{project.type}</span>
          </div>
          <h3 id={`project-${project.index}`} className="display-md mt-6">
            {project.name}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.outcome && (
            <p className="mt-6 border-l-2 border-accent pl-4">
              <span className="eyebrow block text-accent-ink">Outcome</span>
              <span className="mt-1 block font-medium">{project.outcome}</span>
            </p>
          )}

          <div className="mt-8">
            <p className="eyebrow text-muted-foreground">Technologies</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="meta border border-rule px-2.5 py-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {(project.repoUrl || project.demoUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.repoUrl && (
                <ExternalLink href={project.repoUrl} className="btn btn-solid">
                  <Github className="h-4 w-4" aria-hidden />
                  View repository
                </ExternalLink>
              )}
              {project.demoUrl && (
                <ExternalLink href={project.demoUrl} className="btn btn-outline">
                  Live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </ExternalLink>
              )}
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-border lg:border-t-0">
            {details.map((d, i) => (
              <li
                key={d.label}
                className="grid gap-2 border-b border-border py-6 sm:grid-cols-[10rem_1fr] sm:gap-6 lg:first:pt-0"
              >
                <h4 className="flex items-baseline gap-2 font-sans text-sm font-semibold uppercase tracking-wider">
                  <span className="eyebrow text-accent-ink">{i + 1}.</span>
                  {d.label}
                </h4>
                <p className="leading-relaxed text-muted-foreground">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
