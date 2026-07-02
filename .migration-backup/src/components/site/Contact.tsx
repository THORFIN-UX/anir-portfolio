import { EMAIL, LOCATION, MAILTO_URL, WHATSAPP_URL } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative border-b border-border py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Contact
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-balance font-mono text-4xl leading-tight text-foreground md:text-6xl">
            Ready To Build Something Better?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Tell me about your project. Most responses within 24 hours.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-4 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-all hover:bg-accent/90"
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a
              href={MAILTO_URL}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-foreground/40"
            >
              Email
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {LOCATION}
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <a
              href={MAILTO_URL}
              className="transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              +212 773 534 733
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
