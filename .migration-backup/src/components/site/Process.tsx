import { PROCESS } from "@/content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="relative border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="How I Work"
            title="A calm, deliberate process."
            description="Clear communication and predictable delivery — from first message to launch."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06} className="bg-background">
              <div className="h-full bg-background p-8">
                <div className="font-mono text-4xl text-accent md:text-5xl">
                  {step.n}
                </div>
                <h3 className="mt-6 font-mono text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
