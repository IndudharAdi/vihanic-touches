import Link from "next/link";
import Container from "@/components/Container";
import ProductGrid from "@/components/ProductGrid";
import LookbookGallery from "@/components/LookbookGallery";
import { prisma } from "@/lib/db";

export default async function Home() {
  const featured = await prisma.product.findMany({
    include: { images: true },
    take: 8,
    orderBy: { createdAt: "desc" }
  });

  return (
    <Container className="space-y-16 py-12">
      <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="eyebrow">Drop 07 // Minimal essentials</p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Everyday layers with a subtle, real-world finish.
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            A capsule of tees, hoodies, and light outerwear inspired by slow mornings in the city. Built as a working shop so you can feel how
            a real ecommerce storefront behaves.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">
              Shop the collection
            </Link>
            <Link href="/products" className="btn-outline">
              Browse all products
            </Link>
          </div>
          <div className="grid gap-6 text-sm text-gray-600 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-gray-900">48h</p>
              <p>Average dispatch time</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-gray-900">100%</p>
              <p>Plastic-free packaging</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-gray-900">30</p>
              <p>Days for free returns</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Lookbook 2025</p>
          <p className="mt-4 text-2xl font-semibold text-gray-900">
            Layers inspired by weekday commutes, built with natural fabrics.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Shot on location in Echo Park with the Vihanic Touches community.
          </p>
          <div className="mt-6">
            <LookbookGallery />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-gray-400">This week</p>
            <h2 className="text-2xl font-semibold text-gray-900">Featured products</h2>
            <p className="text-sm text-gray-500">New deliveries every Thursday morning.</p>
          </div>
          <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            View the full catalog -
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>
    </Container>
  );
}
