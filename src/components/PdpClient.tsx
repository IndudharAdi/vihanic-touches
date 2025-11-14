"use client";

import Price from "@/components/Price";
import Quantity from "@/components/Quantity";
import { useCart } from "@/stores/cart";
import { resolveProductImage } from "@/lib/images";
import { useState } from "react";

export default function PdpClient({ p }: { p: any }) {
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const img = p.images?.[0];
  const primaryImage = resolveProductImage(img?.url);
  const inventory = p.inventory?.quantity ?? 0;
  const inStock = inventory > 0;

  const handleAdd = () => {
    add({
      id: p.id,
      title: p.title,
      priceCents: p.priceCents,
      qty,
      image: primaryImage
    });
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-4">
        <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[color:var(--surface)] shadow-soft">
          <img src={primaryImage} alt={img?.alt || p.title} className="aspect-square w-full object-cover" />
        </div>
        <div className="rounded-[20px] border border-gray-200 bg-white/80 p-4 text-xs text-gray-500">
          Free tracked shipping on orders over $100 | Carbon neutral packaging | 30-day free returns
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">Drop 07 essentials</p>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">{p.title}</h1>
          <Price cents={p.priceCents} currency={p.currency} className="text-2xl" />
        </div>

        <p className="text-base leading-relaxed text-gray-600">{p.description}</p>

        <div className="rounded-[20px] border border-gray-200 bg-white/70 p-4 text-sm text-gray-600">
          {inStock ? (
            <p>In stock -- {inventory} pieces ready to ship. Orders leave our studio within 24 hours.</p>
          ) : (
            <p>Currently made-to-order. Leave your email to get notified once it is back.</p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Quantity value={qty} onChange={setQty} />
          <button
            type="button"
            className="flex-1 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5 md:flex-none"
            onClick={handleAdd}
            disabled={!inStock}
          >
            {inStock ? "Add to bag" : "Join waitlist"}
          </button>
        </div>

        <ul className="grid gap-3 rounded-[20px] border border-gray-200 bg-white/80 p-4 text-sm text-gray-600">
          <li>- 240 GSM combed cotton with a brushed interior</li>
          <li>- Pre-washed for a relaxed drape and consistent fit</li>
          <li>- Responsibly made in small batches</li>
        </ul>
      </div>
    </div>
  );
}
