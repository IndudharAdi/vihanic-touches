"use client";

import Container from "@/components/Container";
import Price from "@/components/Price";
import Quantity from "@/components/Quantity";
import { useCart } from "@/stores/cart";

export default function CartPage() {
  const { items, setQty, remove, totalCents, clear } = useCart();
  const subtotal = totalCents();

  const handleQtyChange = (id: string, value: number) => {
    if (Number.isNaN(value) || value < 1) return;
    setQty(id, value);
  };

  return (
    <Container className="space-y-8 py-8">
      <div className="space-y-2">
        <p className="eyebrow text-gray-400">Your bag</p>
        <h1 className="text-3xl font-semibold text-gray-900">Cart</h1>
        <p className="text-sm text-gray-600">
          {items.length ? `${items.length} item(s) ready to ship.` : "You have not added anything yet."}
        </p>
      </div>

      {!items.length ? (
        <div className="rounded-2xl border border-gray-200 bg-white/80 p-10 text-sm text-gray-500">
          Your cart is empty. Browse the collection and add a few pieces to see the real checkout flow.
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <div className="h-32 w-full overflow-hidden rounded-2xl bg-gray-100 sm:w-32">
                  <img
                    src={item.image ?? "https://picsum.photos/400?blur=1"}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Vihanic Touches</p>
                    <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                  </div>

                  <Price cents={item.priceCents} className="text-base text-gray-900" />

                  <div className="flex flex-wrap items-center gap-4">
                    <Quantity value={item.qty} onChange={(value) => handleQtyChange(item.id, value)} />
                    <button
                      type="button"
                      className="text-xs font-medium text-gray-500 hover:text-gray-900"
                      onClick={() => remove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-2xl border border-gray-200 bg-white/85 p-6 shadow-soft">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <Price cents={subtotal} className="text-base" />
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes are calculated at checkout.</p>

            <button
              type="button"
              className="w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
              onClick={() => alert("Checkout coming soon!")}
            >
              Checkout
            </button>

            <button type="button" className="w-full btn-outline" onClick={clear}>
              Clear bag
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
