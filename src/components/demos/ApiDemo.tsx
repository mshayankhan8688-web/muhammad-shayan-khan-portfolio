"use client";

import { useState } from "react";

type Item = { id: number; name: string; status: "open" | "done" };

const starter: Item[] = [
  { id: 1, name: "Draft the brief", status: "done" },
  { id: 2, name: "Review the layout", status: "open" },
  { id: 3, name: "Publish the notes", status: "open" },
];

export function ApiDemo() {
  const [items, setItems] = useState(starter);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("GET /items");
  const [body, setBody] = useState(JSON.stringify(starter, null, 2));

  function showList(next = items) {
    setSelected("GET /items");
    setBody(JSON.stringify(next, null, 2));
  }

  function createItem() {
    const trimmed = name.trim();
    if (!trimmed) return;
    const next = [...items, { id: items.length + 1, name: trimmed, status: "open" as const }];
    setItems(next);
    setName("");
    setSelected("POST /items");
    setBody(JSON.stringify({ created: next[next.length - 1] }, null, 2));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="grid h-fit gap-3">
        <button type="button" onClick={() => showList()} className="rounded-2xl border border-ink/10 px-4 py-3 text-left text-sm dark:border-white/10">
          GET /items
        </button>
        <form
          className="rounded-2xl border border-ink/10 p-4 dark:border-white/10"
          onSubmit={(event) => {
            event.preventDefault();
            createItem();
          }}
        >
          <p className="text-sm font-medium">POST /items</p>
          <label className="mt-3 block text-xs text-ink/60 dark:text-paper/60" htmlFor="item-name">
            Name
          </label>
          <input
            id="item-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-xl border border-ink/15 bg-transparent px-3 py-2 text-sm dark:border-white/15"
            placeholder="New resource"
          />
          <button type="submit" className="mt-3 rounded-full bg-pine px-4 py-2 text-sm text-paper">
            Send request
          </button>
        </form>
      </div>
      <pre className="overflow-auto rounded-3xl bg-[#141816] p-5 text-sm leading-relaxed text-[#d7efe9]">
        <span className="text-[#8fd9cf]">{selected}</span>
        {"\n"}
        {body}
      </pre>
    </div>
  );
}
