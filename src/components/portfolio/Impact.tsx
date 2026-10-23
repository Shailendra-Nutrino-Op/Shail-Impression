import { metrics } from "@/content/portfolio";

export function Impact() {
  return (
    <section aria-labelledby="impact-title" className="bg-ink text-ink-foreground">
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-6 border-t border-ink-rule pt-3 sm:grid-cols-12">
          <p className="eyebrow text-accent sm:col-span-3">§ 00 — Impact</p>
          <h2 id="impact-title" className="display-md sm:col-span-9">
            Engineering impact
          </h2>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <li
              key={m.value + m.label}
              className="flex flex-col gap-5 border-t border-ink-rule py-8 sm:px-6 lg:border-l lg:border-t-0 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="eyebrow text-ink-muted">M/0{i + 1}</span>
              <p className="metric-num text-ink-foreground">
                {m.value.endsWith("%") ? (
                  <>
                    {m.value.slice(0, -1)}
                    <span className="text-accent">%</span>
                  </>
                ) : (
                  m.value
                )}
              </p>
              <div>
                <h3 className="font-sans text-lg font-semibold leading-snug tracking-normal">
                  {m.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.context}</p>
                <p className="meta mt-3 text-accent">{m.source}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
