import type { ReactNode } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { basePath } from "@/lib/site";

export function DemoFrame({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main id="content" className="mx-auto max-w-6xl px-6 py-10">
      <a
        href={`${basePath}/#projects`}
        className="inline-flex items-center gap-2 text-sm text-ink/70 transition hover:text-pine dark:text-paper/70"
      >
        <LuArrowLeft aria-hidden />
        Back to portfolio
      </a>
      <p className="mt-8 text-sm font-medium tracking-[0.18em] text-pine uppercase">{kicker}</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{title}</h1>
      <div className="mt-8">{children}</div>
    </main>
  );
}
