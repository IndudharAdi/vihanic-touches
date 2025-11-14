import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type ItemInput = {
  id: string;
  title: string;
  priceCents: number;
  qty: number;
};

export async function POST(req: Request) {
  const { items, email } = (await req.json()) as {
    items: ItemInput[];
    email?: string;
  };

  if (!items || items.length === 0) {
    return NextResponse.json(
      { error: "Cart is empty" },
      { status: 400 }
    );
  }

  const safeEmail = email?.trim() || "guest@example.com";

  const totalCents = items.reduce(
    (sum, i) => sum + i.priceCents * i.qty,
    0
  );

  const order = await prisma.order.create({
    data: {
      email: safeEmail,
      totalCents,
      currency: "USD",
      status: "PAID",
      items: {
        create: items.map((i) => ({
          productId: i.id,
          title: i.title,
          qty: i.qty,
          unitPriceCents: i.priceCents
        }))
      }
    }
  });

  // reduce inventory
  await Promise.all(
    items.map((i) =>
      prisma.inventory.updateMany({
        where: { productId: i.id },
        data: { quantity: { decrement: i.qty } }
      })
    )
  );

  return NextResponse.json({ orderId: order.id });
}