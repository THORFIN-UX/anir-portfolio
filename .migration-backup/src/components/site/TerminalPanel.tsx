import { useEffect, useState } from "react";

const LINES = [
  { k: "status", v: "available for new projects", accent: true },
  { k: "location", v: "agadir, ma" },
  { k: "stack", v: "react · next · node · postgres" },
  { k: "perf", v: "targeting 95+ lighthouse" },
  { k: "response", v: "< 24h" },
];

export function TerminalPanel() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= LINES.length) clearInterval(id);
    }, 180);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-md bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-40 blur-sm" />
      <div className="relative overflow-hidden rounded-md border border-border bg-card/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-border bg-black/40 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            anir@dev — ~/portfolio
          </span>
        </div>
        <div className="space-y-2 px-6 py-6 font-mono text-sm">
          <div className="text-muted-foreground">
            <span className="text-accent">$</span> whoami
          </div>
          <div className="pb-2 text-foreground">
            anir — full stack developer
          </div>
          {LINES.slice(0, visibleCount).map((line) => (
            <div key={line.k} className="flex gap-3">
              <span className="text-accent">&gt;</span>
              <span className="w-20 text-muted-foreground">{line.k}</span>
              <span
                className={line.accent ? "text-accent" : "text-foreground/90"}
              >
                {line.v}
              </span>
            </div>
          ))}
          {visibleCount >= LINES.length && (
            <div className="flex gap-3 pt-2">
              <span className="text-accent">$</span>
              <span className="caret-blink inline-block h-4 w-2 bg-foreground/80" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
