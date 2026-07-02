import { SERVICES } from "@/content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="relative border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Focused engagements. Real business outcomes."
            description="Three areas where I do my best work — chosen because they meaningfully move revenue, credibility, or operational efficiency."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-background">
              <article className="group relative h-full bg-background p-8 transition-all duration-300 hover:bg-card/60">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-md opacity-0 shadow-[0_0_0_1px_rgba(34,197,94,0.35),0_20px_60px_-20px_rgba(34,197,94,0.25)] transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex h-full flex-col">
                  <span className="font-mono text-xs text-muted-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-6 font-mono text-xl text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                    <span className="h-px w-6 bg-current" />
                    Available
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
