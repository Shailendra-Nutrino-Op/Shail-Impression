import type { ReactNode } from "react";

type Props = {
  number: string;
  label: string;
  title: ReactNode;
  id?: string;
  className?: string;
};

/** Editorial section header: ruled line, mono index, display heading. */
export function SectionHeading({ number, label, title, id, className = "" }: Props) {
  return (
    <header className={className}>
      <div className="flex items-baseline justify-between gap-4 border-t border-rule pt-3">
        <span className="eyebrow text-accent-ink">§ {number}</span>
        <span className="eyebrow text-muted-foreground">{label}</span>
      </div>
      <h2 id={id} className="display-lg mt-6 max-w-[18ch] sm:mt-8">
        {title}
      </h2>
    </header>
  );
}
