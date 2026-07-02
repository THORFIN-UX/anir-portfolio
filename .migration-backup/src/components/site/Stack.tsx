import { STACK } from "@/content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="relative border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Modern tools, chosen for reliability."
            description="A pragmatic stack focused on performance, developer velocity, and long-term maintainability."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05} className="bg-background">
              <div className="h-full bg-background p-8">
                <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-accent">/</span>
                  {group.label}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-card/40 px-3 py-1.5 font-mono text-xs text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
