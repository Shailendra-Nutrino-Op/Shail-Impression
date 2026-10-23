import { experience } from "@/content/portfolio";
import { ExperienceEntry } from "./ExperienceEntry";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="shell section-y pt-0">
      <SectionHeading
        id="experience-title"
        number="02"
        label="Experience"
        title="Where I've shipped production code"
      />
      <div className="mt-12">
        {experience.map((item) => (
          <ExperienceEntry key={item.company} item={item} />
        ))}
      </div>
    </section>
  );
}
