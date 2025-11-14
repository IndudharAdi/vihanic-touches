import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || undefined;

  const products = await prisma.product.findMany({
    where: q
      ? {
          OR: [
            { title: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } }
          ]
        }
      : {},
    include: { images: true, inventory: true },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(products);
}

export async function POST(req: Request) {

    // For simplicity, no validation is done here
  const data = await req.json();
  const created = await prisma.product.create({ data });
  return NextResponse.json(created, { status: 201 });
}