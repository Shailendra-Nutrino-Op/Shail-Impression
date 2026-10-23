import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { Impact } from "@/components/portfolio/Impact";
import { About } from "@/components/portfolio/About";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const title = "Shailendra Kumar Bharti — Java Backend / Full Stack Developer";
const description =
  "Java & Spring Boot developer with 3+ years building REST APIs, Kafka-driven microservices and performance-focused systems across healthcare and investment domains.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Impact />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
