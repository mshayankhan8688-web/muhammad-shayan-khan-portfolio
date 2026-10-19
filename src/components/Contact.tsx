"use client";

import { FormEvent, useState } from "react";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-pine dark:border-white/15 dark:bg-white/5 dark:placeholder:text-paper/40";

export function Contact() {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <p className="text-sm font-medium tracking-[0.18em] text-pine uppercase">Contact</p>
      <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Let&apos;s talk</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
        <form
          onSubmit={onSubmit}
          className="grid gap-4 rounded-3xl border border-ink/10 bg-white/60 p-5 sm:p-6 dark:border-white/10 dark:bg-white/5"
        >
          <label htmlFor="contact-name" className="grid gap-2 text-sm">
            Name
            <input id="contact-name" name="name" required autoComplete="name" className={fieldClass} />
          </label>
          <label htmlFor="contact-email" className="grid gap-2 text-sm">
            Email
            <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          </label>
          <label htmlFor="contact-message" className="grid gap-2 text-sm">
            Message
            <textarea id="contact-message" name="message" required rows={5} className={fieldClass} />
          </label>
          <p id="contact-note" className="text-sm leading-relaxed text-ink/70 dark:text-paper/70">
            This opens your email app with the message filled in. The website does not send or store it.
          </p>
          <button
            type="submit"
            aria-describedby="contact-note"
            className="inline-flex w-full items-center justify-center rounded-full bg-pine px-6 py-3 text-sm font-medium text-paper transition hover:bg-pine/90 sm:w-fit"
          >
            Open email draft
          </button>
          {opened ? (
            <p role="status" className="text-sm text-pine">
              Your email app should be open. If it is not, write to {site.email}. Nothing was sent by this website.
            </p>
          ) : null}
        </form>

        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-ink/10 bg-white/60 p-5 sm:p-6 dark:border-white/10 dark:bg-white/5">
          <div>
            <h3 className="font-display text-2xl">Direct links</h3>
            <p className="mt-2 text-sm text-ink/70 dark:text-paper/70">
              Reach Muhammad Shayan Khan by email, LinkedIn, or GitHub.
            </p>
          </div>
          <ul className="grid gap-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-sm transition hover:text-pine"
              >
                <LuMail aria-hidden className="text-lg" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm transition hover:text-pine"
              >
                <LuLinkedin aria-hidden className="text-lg" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm transition hover:text-pine"
              >
                <LuGithub aria-hidden className="text-lg" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
