"use client";

import Container from "@/components/Container";
import ProductGrid from "@/components/ProductGrid";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const params = useSearchParams();
  const router = useRouter();
  const initialQ = params.get("q") || "";

  const [q, setQ] = useState(initialQ);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      const url = q ? `/api/search?q=${encodeURIComponent(q)}` : "/api/products";

      try {
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        setItems(data);
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") {
          console.error("Failed to load products", error);
        }
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, [q]);

  return (
    <Container className="space-y-8 py-6">
      <div className="rounded-[28px] border border-[var(--border)] bg-white/85 p-8 shadow-soft">
        <p className="eyebrow text-gray-400">Shop everything</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">All products</h1>
            <p className="text-sm text-gray-600">Search by name or description to see what is in stock right now.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or description"
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-700 shadow-sm focus:border-gray-400 focus:outline-none"
          />
          <button
            type="button"
            className="btn-outline w-full sm:w-auto"
            onClick={() => router.push(`/products?q=${encodeURIComponent(q)}`)}
          >
            Apply
          </button>
        </div>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-10 text-sm text-gray-500">
          Loading products...
        </div>
      ) : (
        <ProductGrid products={items} />
      )}
    </Container>
  );
}
