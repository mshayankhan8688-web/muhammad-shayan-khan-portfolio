"use client";

import { useMemo, useState } from "react";

const rows = [
  { title: "City market prices", source: "public listing", words: 840 },
  { title: "Campus event calendar", source: "public page", words: 520 },
  { title: "Library opening hours", source: "public page", words: 260 },
  { title: "Transit weekend notice", source: "public listing", words: 410 },
  { title: "Park trail update", source: "public page", words: 330 },
];

export function DashboardDemo() {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return rows;
    return rows.filter((row) => `${row.title} ${row.source}`.toLowerCase().includes(needle));
  }, [query]);
  const max = Math.max(...rows.map((row) => row.words));

  return (
    <div className="grid gap-6">
      <label className="block max-w-md text-sm" htmlFor="dash-search">
        Search collected pages
        <input
          id="dash-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-ink/15 bg-white/70 px-4 py-3 dark:border-white/15 dark:bg-white/5"
          placeholder="Try market or campus"
        />
      </label>
      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white/70 dark:border-white/10 dark:bg-white/5">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-ink/10 text-ink/60 dark:border-white/10 dark:text-paper/60">
            <tr>
              <th className="px-4 py-3 font-medium">Page</th>
              <th className="px-4 py-3 font-medium">Source</th>
              <th className="px-4 py-3 font-medium">Words</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.title} className="border-b border-ink/5 last:border-0 dark:border-white/5">
                <td className="px-4 py-3">{row.title}</td>
                <td className="px-4 py-3">{row.source}</td>
                <td className="px-4 py-3">{row.words}</td>
              </tr>
            ))}
            {visible.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-ink/60 dark:text-paper/60" colSpan={3}>
                  No matching pages.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <ul className="grid gap-3">
        {visible.map((row) => (
          <li key={row.title}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{row.title}</span>
              <span>{row.words}</span>
            </div>
            <div className="h-2 rounded-full bg-ink/10 dark:bg-white/10">
              <div className="h-2 rounded-full bg-pine" style={{ width: `${(row.words / max) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
