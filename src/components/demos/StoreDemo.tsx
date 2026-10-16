"use client";

import { useMemo, useState } from "react";

const products = [
  { id: "mug", name: "Ceramic Mug", price: 18, note: "Matte finish" },
  { id: "lamp", name: "Desk Lamp", price: 42, note: "Warm light" },
  { id: "notebook", name: "Notebook", price: 12, note: "200 pages" },
  { id: "tote", name: "Canvas Tote", price: 24, note: "Heavy cotton" },
  { id: "bottle", name: "Water Bottle", price: 22, note: "750 ml" },
  { id: "plant", name: "Desk Plant", price: 16, note: "Low light" },
];

export function StoreDemo() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [placed, setPlaced] = useState(false);

  const lines = useMemo(
    () =>
      products
        .filter((product) => cart[product.id])
        .map((product) => ({ ...product, qty: cart[product.id] })),
    [cart],
  );
  const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);

  function add(id: string) {
    setPlaced(false);
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <ul className="grid gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <li key={product.id} className="rounded-3xl border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm text-ink/60 dark:text-paper/60">{product.note}</p>
            <h2 className="mt-1 font-display text-2xl">{product.name}</h2>
            <p className="mt-3 text-lg">${product.price}</p>
            <button
              type="button"
              onClick={() => add(product.id)}
              className="mt-4 rounded-full bg-pine px-4 py-2 text-sm text-paper"
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <aside className="h-fit rounded-3xl border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
        <h2 className="font-display text-2xl">Cart</h2>
        {lines.length === 0 ? (
          <p className="mt-3 text-sm text-ink/70 dark:text-paper/70">Your cart is empty.</p>
        ) : (
          <ul className="mt-3 grid gap-2 text-sm">
            {lines.map((line) => (
              <li key={line.id} className="flex justify-between gap-3">
                <span>
                  {line.name} × {line.qty}
                </span>
                <span>${line.price * line.qty}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 flex justify-between border-t border-ink/10 pt-4 text-sm dark:border-white/10">
          <span>Total</span>
          <span>${total}</span>
        </p>
        <button
          type="button"
          disabled={lines.length === 0}
          onClick={() => {
            setCart({});
            setPlaced(true);
          }}
          className="mt-4 w-full rounded-full bg-pine px-4 py-2 text-sm text-paper disabled:opacity-40"
        >
          Checkout
        </button>
        {placed ? <p className="mt-3 text-sm text-pine">Order placed. This demo does not charge a card.</p> : null}
      </aside>
    </div>
  );
}
