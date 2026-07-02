export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <span>© {year} Anir</span>
        <span>Designed &amp; Built by Anir</span>
      </div>
    </footer>
  );
}
