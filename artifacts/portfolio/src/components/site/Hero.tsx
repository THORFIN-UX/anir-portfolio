import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { HERO, WHATSAPP_URL } from "@/content/site";
import { TerminalPanel } from "./TerminalPanel";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const words = HERO.headline.split(" ");

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 22, skewY: 3 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative border-b border-border pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {HERO.label}
            </div>
          </Reveal>

          <motion.h1
            className="text-balance font-mono text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl"
            variants={containerVariants}
            initial={reduced ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={reduced ? undefined : wordVariants}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.48, ease: EASE }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98]"
              data-testid="link-hero-cta-primary"
            >
              Get Instant Proposal
              <span aria-hidden>→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-foreground/40"
              data-testid="link-hero-cta-secondary"
            >
              View Projects
            </a>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.58, ease: EASE }}
          >
            {HERO.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <Reveal delay={0.2}>
          <TerminalPanel />
        </Reveal>
      </div>
    </section>
  );
}
