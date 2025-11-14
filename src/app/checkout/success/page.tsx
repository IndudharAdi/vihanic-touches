import { prisma } from "@/lib/db";

export default async function SuccessPage({
  searchParams
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams.orderId;
  const order = orderId
    ? await prisma.order.findUnique({
        where: { id: orderId },
        include: { items: true }
      })
    : null;

  if (!order) {
    return <div>Order not found.</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">🎉 Order placed!</h1>
      <p>We have saved your order with email: {order.email}</p>
      <p>
        Order total: {order.totalCents / 100} {order.currency}
      </p>
      <h2 className="text-xl font-semibold mt-4">Items</h2>
      <ul className="space-y-2">
        {order.items.map((i) => (
          <li
            key={i.id}
            className="flex justify-between border p-2 rounded"
          >
            <span>
              {i.title} × {i.qty}
            </span>
            <span>{(i.unitPriceCents * i.qty) / 100}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}