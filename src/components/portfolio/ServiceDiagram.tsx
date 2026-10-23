type Node = { x: number; y: number; w: number; label: string; sub: string; accent?: boolean };

const H = 58;
const nodes: Node[] = [
  { x: 24, y: 40, w: 136, label: "API", sub: "rest · jwt" },
  { x: 228, y: 128, w: 148, label: "SERVICE", sub: "spring boot", accent: true },
  { x: 24, y: 236, w: 136, label: "EVENT", sub: "kafka topic" },
  { x: 228, y: 340, w: 148, label: "DATABASE", sub: "oracle · mysql" },
];

const paths = [
  { d: "M160 69 H302 V128", note: "request", nx: 214, ny: 60 },
  { d: "M302 186 V265 H160", note: "publish", nx: 314, ny: 228 },
  { d: "M92 294 V369 H228", note: "persist", nx: 104, ny: 334 },
];

/** Lightweight connected-service diagram (pure SVG, theme tokens only). */
export function ServiceDiagram() {
  return (
    <figure className="relative w-full">
      <div className="mb-3 flex items-baseline justify-between border-b border-border pb-2">
        <span className="eyebrow text-muted-foreground">Fig. 01</span>
        <span className="eyebrow text-muted-foreground">Request lifecycle</span>
      </div>
      <svg
        viewBox="0 0 400 430"
        role="img"
        aria-labelledby="diagram-title diagram-desc"
        className="h-auto w-full max-w-[460px]"
      >
        <title id="diagram-title">Connected service diagram</title>
        <desc id="diagram-desc">
          A request flows from the API to a Spring Boot service, which publishes to a Kafka event
          topic, which is persisted to a database.
        </desc>

        {/* dotted grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-border" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="400" height="430" fill="url(#grid)" />

        {paths.map((p) => (
          <g key={p.note}>
            <path d={p.d} fill="none" className="stroke-border" strokeWidth="6" />
            <path
              d={p.d}
              fill="none"
              className="flow-line stroke-accent"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <text x={p.nx} y={p.ny} className="fill-muted-foreground font-mono" fontSize="10">
              {p.note}
            </text>
          </g>
        ))}

        {nodes.map((n, i) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={H}
              rx="3"
              className={n.accent ? "fill-foreground" : "fill-card stroke-foreground"}
              strokeWidth="1.25"
            />
            <text
              x={n.x + 14}
              y={n.y + 25}
              className={`font-mono ${n.accent ? "fill-background" : "fill-foreground"}`}
              fontSize="13"
              fontWeight="600"
              letterSpacing="1.5"
            >
              {n.label}
            </text>
            <text
              x={n.x + 14}
              y={n.y + 43}
              className={`font-mono ${n.accent ? "fill-ink-muted" : "fill-muted-foreground"}`}
              fontSize="10"
            >
              {n.sub}
            </text>
            <text
              x={n.x + n.w - 12}
              y={n.y + 18}
              textAnchor="end"
              className={`font-mono ${n.accent ? "fill-accent" : "fill-accent-ink"}`}
              fontSize="9"
            >
              0{i + 1}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="meta mt-3 text-muted-foreground">
        Typical path through the systems I work on: API → service → event → store.
      </figcaption>
    </figure>
  );
}
