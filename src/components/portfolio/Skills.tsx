import { skillGroups, type SkillGroup } from "@/content/portfolio";
import { SectionHeading } from "./SectionHeading";

function SkillRow({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <div className="grid gap-3 border-b border-border py-6 md:grid-cols-12 md:gap-10">
      <h3 className="flex items-baseline gap-3 font-sans text-base font-semibold tracking-normal md:col-span-4">
        <span className="eyebrow text-accent-ink">{String.fromCharCode(65 + index)}</span>
        {group.title}
      </h3>
      <ul className="flex flex-wrap gap-x-1 gap-y-2 md:col-span-8" aria-label={group.title}>
        {group.items.map((item, i) => (
          <li key={item} className="flex items-center text-[1.02rem]">
            {item}
            {i < group.items.length - 1 && (
              <span aria-hidden className="mx-2.5 text-border">
                /
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-card">
      <div className="shell section-y">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <SectionHeading id="skills-title" number="03" label="Skills" title="Technical toolkit" />
          </div>
        </div>
        <div className="mt-12 border-t border-rule">
          {skillGroups.map((g, i) => (
            <SkillRow key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
