import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 font-mono text-xs text-accent transition-colors hover:text-accent/80"
      data-testid={`link-project-${label}`}
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

function SpotlightCard({
  children,
  className,
  testId,
}: {
  children: React.ReactNode;
  className?: string;
  testId?: string;
}) {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-999);
  const mouseY = useMotionValue(-999);
  const background = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(34,197,94,0.08), transparent 70%)`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    mouseX.set(-999);
    mouseY.set(-999);
  }

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden ${className ?? ""}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-testid={testId}
    >
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}

export function Projects() {
  const { featured, others } = PROJECTS;
  const reduced = useReducedMotion();

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

        <Reveal>
          <SpotlightCard
            className="rounded-md border border-border bg-card/40 transition-colors hover:border-accent/30"
            testId="card-project-featured"
          >
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
          </SpotlightCard>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <SpotlightCard
                className="flex h-full flex-col rounded-md border border-border bg-card/30 transition-colors hover:border-accent/30"
                testId={`card-project-${i}`}
              >
                <motion.div
                  className="flex h-full flex-col p-8"
                  whileHover={reduced ? {} : { y: -2 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
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
                </motion.div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
