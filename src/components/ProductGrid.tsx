import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: any[] }) {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white/80 p-10 text-center text-sm text-gray-500">
        No products found. Try adjusting your filters or search.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}
