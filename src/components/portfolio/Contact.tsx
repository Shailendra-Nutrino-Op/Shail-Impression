import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

type Row = { label: string; value: string; href: string; icon: ReactNode; external?: boolean };

const rows: Row[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail className="h-5 w-5" aria-hidden />,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: profile.phoneHref,
    icon: <Phone className="h-5 w-5" aria-hidden />,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: <Linkedin className="h-5 w-5" aria-hidden />,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    icon: <Github className="h-5 w-5" aria-hidden />,
    external: true,
  },
];

const rowClass =
  "group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-border py-5 transition-colors hover:text-accent-ink sm:grid-cols-[2.5rem_7rem_1fr_auto]";

function RowInner({ row }: { row: Row }) {
  return (
    <>
      <span className="text-accent">{row.icon}</span>
      <span className="eyebrow text-muted-foreground sm:block">{row.label}</span>
      <span className="col-span-2 col-start-2 min-w-0 break-words text-lg font-medium sm:col-span-1 sm:col-start-auto">
        {row.value}
      </span>
      <ArrowUpRight
        className="row-start-1 col-start-3 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:row-start-auto sm:col-start-auto"
        aria-hidden
      />
    </>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-rule bg-card">
      <div className="shell section-y grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <p className="eyebrow text-accent-ink">§ 07 — Contact</p>
          <h2 id="contact-title" className="display-lg mt-6 max-w-[14ch]">
            Have an engineering opportunity in mind?
          </h2>
          <p className="lede mt-6 max-w-[44ch] text-muted-foreground">
            Let's connect about Java development, backend engineering and building reliable
            applications.
          </p>
          <a
            href={profile.resumeHref}
            download={profile.resumeFileName}
            className="btn btn-outline mt-8"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download Resume (PDF)
          </a>
        </div>

        <ul className="border-t border-rule lg:col-span-6 lg:mt-14">
          {rows.map((row) => (
            <li key={row.label}>
              {row.external ? (
                <ExternalLink href={row.href} className={rowClass} aria-label={`${row.label}: ${row.value}`}>
                  <RowInner row={row} />
                </ExternalLink>
              ) : (
                <a href={row.href} className={rowClass} aria-label={`${row.label}: ${row.value}`}>
                  <RowInner row={row} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
