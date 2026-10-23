import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";
import { ServiceDiagram } from "./ServiceDiagram";

const techLine = ["Java 17", "Spring Boot", "Microservices", "Kafka"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="shell pb-16 pt-10 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-3">
        <p className="eyebrow text-accent-ink">Java engineering / Portfolio 2026</p>
        <p className="eyebrow text-muted-foreground">
          {profile.name} — {profile.title}
        </p>
      </div>

      <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="rise-in lg:col-span-7">
          <h1 id="hero-title" className="display-xl max-w-[14ch]">
            I build reliable backend systems for{" "}
            <em className="font-medium text-accent-ink">complex business</em> operations.
          </h1>

          <p className="lede mt-8 max-w-[52ch] text-muted-foreground">
            Java and Spring Boot developer working across enterprise APIs, microservices,
            event-driven systems, and performance-focused applications.
          </p>

          <p className="meta mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground">
            {techLine.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-accent">
                    ·
                  </span>
                )}
                {t}
              </span>
            ))}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn btn-solid">
              Explore My Work
              <ArrowDownRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5">
            <li>
              <ExternalLink
                href={profile.github}
                className="meta link-rule inline-flex items-center gap-2 text-foreground hover:text-accent-ink"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={profile.linkedin}
                className="meta link-rule inline-flex items-center gap-2 text-foreground hover:text-accent-ink"
              >
                <Linkedin className="h-4 w-4" aria-hidden />
                LinkedIn
              </ExternalLink>
            </li>
            <li className="meta text-muted-foreground">3+ yrs · Healthcare &amp; Investment</li>
          </ul>
        </div>

        <div className="rise-in flex justify-center [animation-delay:150ms] lg:col-span-5 lg:justify-end lg:pt-4">
          <div className="w-full max-w-[460px]">
            <ServiceDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
