export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-ink/60 sm:flex-row sm:justify-between sm:text-left dark:text-paper/60">
        <p>Built with Next.js &amp; Tailwind CSS</p>
        <p>{year}</p>
      </div>
    </footer>
  );
}
