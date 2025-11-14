import Link from "next/link";
import Price from "./Price";
import { resolveProductImage } from "@/lib/images";

export default function ProductCard({ p }: { p: any }) {
  const image = resolveProductImage(p.images?.[0]?.url);
  const alt = p.images?.[0]?.alt ?? p.title;
  const createdAt = p.createdAt ? new Date(p.createdAt) : undefined;
  const isNew = createdAt
    ? Date.now() - createdAt.getTime() < 1000 * 60 * 60 * 24 * 21
    : false;

  return (
    <Link
      href={`/products/${p.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-white shadow-soft transition hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--surface-muted)]">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-gray-900 shadow">
            New
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
          Essentials
        </p>
        <h3 className="text-base font-semibold text-gray-900">{p.title}</h3>
        <p className="line-clamp-2 text-sm text-gray-500">
          {p.description || "Soft-touch cotton with a relaxed drape."}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <Price
            cents={p.priceCents}
            currency={p.currency ?? "USD"}
            className="text-base"
          />
          <span className="text-xs font-medium text-gray-500 transition group-hover:text-gray-900">
            View details ->
          </span>
        </div>
      </div>
    </Link>
  );
}
