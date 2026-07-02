import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const LINES = [
  { k: "status", v: "available for new projects", accent: true },
  { k: "location", v: "agadir, ma" },
  { k: "stack", v: "react · next · node · postgres" },
  { k: "perf", v: "targeting 95+ lighthouse" },
  { k: "response", v: "< 24h" },
];

const CHAR_DELAY = 28;
const LINE_PAUSE = 100;

export function TerminalPanel() {
  const reduced = useReducedMotion();
  const [completedLines, setCompletedLines] = useState<typeof LINES>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced) {
      setCompletedLines([...LINES]);
      setCurrentLineIdx(LINES.length);
      setDone(true);
      return;
    }

    if (currentLineIdx >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[currentLineIdx];

    if (currentChars < line.v.length) {
      timerRef.current = setTimeout(
        () => setCurrentChars((c) => c + 1),
        CHAR_DELAY,
      );
    } else {
      timerRef.current = setTimeout(() => {
        setCompletedLines((prev) => [...prev, line]);
        setCurrentLineIdx((i) => i + 1);
        setCurrentChars(0);
      }, LINE_PAUSE);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentLineIdx, currentChars, reduced]);

  const typingLine =
    !done && currentLineIdx < LINES.length
      ? LINES[currentLineIdx]
      : null;

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-md bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-40 blur-sm" />
      <div className="relative overflow-hidden rounded-md border border-border bg-card/60 backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-border bg-black/40 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
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

          {completedLines.map((line) => (
            <div key={line.k} className="flex gap-3">
              <span className="text-accent">&gt;</span>
              <span className="w-20 shrink-0 text-muted-foreground">{line.k}</span>
              <span className={line.accent ? "text-accent" : "text-foreground/90"}>
                {line.v}
              </span>
            </div>
          ))}

          {typingLine && (
            <div className="flex gap-3">
              <span className="text-accent">&gt;</span>
              <span className="w-20 shrink-0 text-muted-foreground">{typingLine.k}</span>
              <span className={typingLine.accent ? "text-accent" : "text-foreground/90"}>
                {typingLine.v.slice(0, currentChars)}
                <span className="caret-blink inline-block h-[1em] w-[0.5ch] translate-y-[0.1em] bg-current" />
              </span>
            </div>
          )}

          {done && (
            <div className="flex gap-3 pt-2">
              <span className="text-accent">$</span>
              {!reduced && (
                <span className="caret-blink inline-block h-4 w-2 bg-foreground/80" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
