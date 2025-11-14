"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";

export default function ProductListClient({ products }: { products: any[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const q = searchParams.get("q")?.toLowerCase() ?? "";

    if (!q) {
      setFiltered(products);
      return;
    }

    setFiltered(
      products.filter((p) =>
        p.title.toLowerCase().includes(q)
      )
    );
  }, [searchParams, products]);

  return <ProductGrid products={filtered} />;
}