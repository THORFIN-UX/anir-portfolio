import { HERO, WHATSAPP_URL } from "@/content/site";
import { TerminalPanel } from "./TerminalPanel";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-border pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <Reveal>
          <div>
            <div className="mb-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {HERO.label}
            </div>
            <h1 className="text-balance font-mono text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
              {HERO.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90"
              >
                Get Instant Proposal
                <span aria-hidden>→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-foreground/40"
              >
                View Projects
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {HERO.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <TerminalPanel />
        </Reveal>
      </div>
    </section>
  );
}
