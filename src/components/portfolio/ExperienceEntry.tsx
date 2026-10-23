import { ArrowUpRight } from "lucide-react";
import type { Experience } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

export function ExperienceEntry({ item }: { item: Experience }) {
  return (
    <article className="grid gap-6 border-t border-rule py-10 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <p className="eyebrow text-accent-ink">Exp. {item.index}</p>
        <p className="meta mt-3 text-foreground">{item.dates}</p>
        <h3 className="mt-4 font-display text-2xl font-semibold">{item.company}</h3>
        <p className="meta mt-1 text-muted-foreground">{item.location}</p>
      </div>

      <div className="md:col-span-8">
        <p className="text-xl font-semibold">{item.title}</p>
        <p className="mt-2">
          {item.projectUrl ? (
            <ExternalLink
              href={item.projectUrl}
              className="link-rule inline-flex items-baseline gap-1 font-medium hover:text-accent-ink"
            >
              {item.project}
              <ArrowUpRight className="h-4 w-4 self-center" aria-hidden />
            </ExternalLink>
          ) : (
            <span className="font-medium">{item.project}</span>
          )}
          <span className="meta ml-2 text-muted-foreground">/ {item.domain}</span>
        </p>

        {item.highlights.length > 0 && (
          <ul className="mt-6 space-y-3">
            {item.highlights.map((h) => (
              <li
                key={h}
                className="border-l-2 border-accent bg-card py-3 pl-4 pr-3 leading-relaxed"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 space-y-2.5">
          {item.responsibilities.map((r) => (
            <li key={r} className="grid grid-cols-[1.25rem_1fr] leading-relaxed text-muted-foreground">
              <span aria-hidden className="text-accent">
                —
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <p className="meta mt-6 text-muted-foreground">
          <span className="text-foreground">Stack:</span> {item.stack.join(" / ")}
        </p>
      </div>
    </article>
  );
}
