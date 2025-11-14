import Container from "@/components/Container";
import PdpClient from "@/components/PdpClient";
import { prisma } from "@/lib/db";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await prisma.product.findFirst({
    where: { slug: params.slug },
    include: { images: true, inventory: true }
  });

  if (!product) {
    return (
      <Container className="py-12">
        <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 text-sm text-gray-600">
          Product not found.{" "}
          <Link href="/products" className="font-medium text-gray-900 hover:underline">
            Back to products
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="space-y-6 py-10">
      <Link href="/products" className="text-xs text-gray-500 transition hover:text-gray-800">
        Back to products
      </Link>
      <PdpClient p={product} />
    </Container>
  );
}
