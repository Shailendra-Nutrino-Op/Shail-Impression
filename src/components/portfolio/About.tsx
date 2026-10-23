import { profile } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

const practices = [
  { k: "APIs & backend features", v: "REST APIs and enterprise application modules in Java and Spring Boot." },
  { k: "Event-driven services", v: "Microservices communicating through Kafka for decoupled workflows." },
  { k: "Query performance", v: "Indexing and refactoring complex SQL until it holds up in production." },
  { k: "Testing & quality", v: "JUnit, Mockito, integration tests, CI builds and code review." },
  { k: "Collaboration", v: "Agile Scrum with product owners, onsite/offshore teams, mentoring." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="shell section-y">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            id="about-title"
            number="01"
            label="About"
            title="How I approach engineering"
          />
          <figure className="mt-10 max-w-[340px]">
            <div className="border border-rule bg-card p-2">
              <img
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                width={400}
                height={400}
                loading="lazy"
                className="aspect-square w-full object-cover grayscale-[15%]"
              />
            </div>
            <figcaption className="meta mt-3 text-muted-foreground">
              {profile.name} · Java Backend Developer
            </figcaption>
          </figure>
          <p className="meta mt-6 max-w-[34ch] text-muted-foreground">
            Software Engineer · 3.7+ years · Java, Spring Boot, microservices · Healthcare
            &amp; investment domains
          </p>
        </div>

        <div className="lg:col-span-7 lg:pt-16">
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              <span className="float-left mr-3 mt-1 font-display text-6xl font-semibold leading-[0.8] text-accent">
                I
              </span>
              build enterprise application modules in Java and Spring Boot — mostly REST APIs and
              backend features, connected through Kafka in microservice architectures.
            </p>
            <p className="text-muted-foreground">
              My work spans two demanding domains: Medicaid management in healthcare, and
              retirement plan administration in investments. Both reward the same habits — careful
              data handling, predictable APIs, and SQL that keeps up with real workloads.
            </p>
            <p className="text-muted-foreground">
              I treat testing and code quality as part of the feature: unit and integration tests,
              CI builds, and code reviews — where I've also mentored junior developers.
            </p>
          </div>

          <dl className="mt-12 border-t border-rule">
            {practices.map((p, i) => (
              <div
                key={p.k}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-1 border-b border-border py-4 sm:grid-cols-[2.5rem_14rem_1fr]"
              >
                <span className="eyebrow pt-1 text-accent-ink">0{i + 1}</span>
                <dt className="font-semibold">{p.k}</dt>
                <dd className="col-start-2 text-muted-foreground sm:col-start-3">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
