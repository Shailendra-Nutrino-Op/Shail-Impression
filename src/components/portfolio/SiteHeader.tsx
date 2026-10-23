import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navItems, profile } from "@/content/portfolio";
import { ExternalLink } from "./ExternalLink";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = navItems.map((n) => n.id);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="hidden whitespace-nowrap lg:inline">{profile.name}</span>
          <span className="whitespace-nowrap lg:hidden">{profile.shortName}</span>
          <span className="inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent transition-transform group-hover:scale-150" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block px-3 py-2 text-sm transition-colors hover:text-accent-ink active:text-accent ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 bottom-1 h-px bg-accent transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ExternalLink href={profile.resumeHref} className="btn btn-solid hidden sm:inline-flex">
            <FileText className="h-4 w-4" aria-hidden />
            Resume
          </ExternalLink>
          <button
            type="button"
            className="btn btn-outline px-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-border bg-background md:hidden"
      >
        <ul className="shell flex flex-col py-2">
          {navItems.map((item, i) => (
            <li key={item.id} className="border-b border-border last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "true" : undefined}
                className="flex items-baseline gap-4 py-4 font-display text-2xl font-semibold active:text-accent"
              >
                <span className="eyebrow text-accent-ink">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <ExternalLink
              href={profile.resumeHref}
              onClick={() => setOpen(false)}
              className="btn btn-solid w-full"
            >
              <FileText className="h-4 w-4" aria-hidden />
              View Resume
            </ExternalLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
