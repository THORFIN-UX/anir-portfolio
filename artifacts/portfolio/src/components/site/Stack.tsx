import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { STACK } from "@/content/site";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const badgeContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0.75, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

export function Stack() {
  const reduced = useReducedMotion();

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
              <div className="h-full bg-background p-8" data-testid={`card-stack-${i}`}>
                <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-accent">/</span>
                  {group.label}
                </div>
                <motion.ul
                  className="flex flex-wrap gap-2"
                  variants={reduced ? undefined : badgeContainer}
                  initial={reduced ? false : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={reduced ? undefined : badgeItem}
                      className="rounded-sm border border-border bg-card/40 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/40 hover:text-accent cursor-default"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
