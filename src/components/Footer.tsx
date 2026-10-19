import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center text-sm text-ink/70 sm:flex-row sm:justify-between sm:text-left dark:text-paper/70">
        <p>
          {site.name}
          <span className="mx-2" aria-hidden>
            ·
          </span>
          Built with Next.js and Tailwind CSS
        </p>
        <a href={site.resumePath} download="Muhammad-Shayan-Khan-CV.pdf" className="font-medium text-pine">
          Download CV
        </a>
        <p>{year}</p>
      </div>
    </footer>
  );
}
