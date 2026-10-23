import { certifications, education } from "@/content/portfolio";

export function Credentials() {
  return (
    <section aria-labelledby="credentials-title" className="shell pb-[var(--section-y)]">
      <h2 id="credentials-title" className="sr-only">
        Education and certifications
      </h2>
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        <div className="border-t border-rule pt-3">
          <p className="eyebrow text-accent-ink">§ 05 — Education</p>
          <h3 className="display-md mt-6">{education.degree}</h3>
          <dl className="mt-6 grid grid-cols-[7rem_1fr] gap-y-2 text-[0.95rem]">
            <dt className="meta text-muted-foreground">Institution</dt>
            <dd>{education.institution}</dd>
            <dt className="meta text-muted-foreground">Years</dt>
            <dd>{education.dates}</dd>
            <dt className="meta text-muted-foreground">CGPA</dt>
            <dd>{education.cgpa}</dd>
            <dt className="meta text-muted-foreground">Coursework</dt>
            <dd>{education.coursework.join(", ")}</dd>
          </dl>
        </div>

        <div className="border-t border-rule pt-3">
          <p className="eyebrow text-accent-ink">§ 06 — Certifications &amp; achievements</p>
          <ul className="mt-6">
            {certifications.map((c, i) => (
              <li
                key={c}
                className="grid grid-cols-[2.25rem_1fr] border-b border-border py-4 leading-snug"
              >
                <span className="eyebrow pt-0.5 text-muted-foreground">0{i + 1}</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
