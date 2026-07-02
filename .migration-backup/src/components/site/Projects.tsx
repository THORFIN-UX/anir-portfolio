import { PROJECTS } from "@/content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 font-mono text-xs text-accent transition-colors hover:text-accent/80"
    >
      <span className="underline-offset-4 group-hover/link:underline">{label}</span>
      <span aria-hidden className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
    </a>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
      <p className="text-sm leading-relaxed text-foreground/85">{value}</p>
    </div>
  );
}

export function Projects() {
  const { featured, others } = PROJECTS;
  return (
    <section id="projects" className="relative border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Work"
            title="Real projects, shipped for real businesses."
            description="A tight selection of client work across e-commerce, real estate, and cooperatives."
          />
        </Reveal>

        {/* Featured case study */}
        <Reveal>
          <article className="group relative overflow-hidden rounded-md border border-border bg-card/40 transition-colors hover:border-accent/30">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
              <div className="border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-12">
                <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  <span className="h-px w-8 bg-accent" />
                  Featured Case Study
                </div>
                <h3 className="font-mono text-3xl text-foreground md:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {featured.category}
                </p>
                <div className="mt-10">
                  <ExternalLink href={featured.url} label={featured.display} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 lg:p-12">
                <Field label="Challenge" value={featured.challenge} />
                <Field label="Solution" value={featured.solution} />
                <Field label="Outcome" value={featured.outcome} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Other projects */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-md border border-border bg-card/30 p-8 transition-colors hover:border-accent/30">
                <h3 className="font-mono text-xl text-foreground">{p.name}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {p.category}
                </p>
                <div className="mt-8 space-y-6">
                  <Field label="Challenge" value={p.challenge} />
                  <Field label="Solution" value={p.solution} />
                </div>
                <div className="mt-auto pt-8">
                  <ExternalLink href={p.url} label={p.display} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
