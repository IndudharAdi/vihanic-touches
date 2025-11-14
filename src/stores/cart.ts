import { create } from "zustand";
import { persist } from "zustand/middleware";

type Item = {
  id: string;
  title: string;
  priceCents: number;
  qty: number;
  image?: string;
};

type CartState = {
  items: Item[];
  add: (i: Item) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  totalCents: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (i) =>
        set((s) => {
          const existing = s.items.find((x) => x.id === i.id);
          return {
            items: existing
              ? s.items.map((x) =>
                  x.id === i.id ? { ...x, qty: x.qty + i.qty } : x
                )
              : [...s.items, i]
          };
        }),
      remove: (id) =>
        set((s) => ({ items: s.items.filter((x) => x.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          items: s.items.map((x) =>
            x.id === id ? { ...x, qty } : x
          )
        })),
      clear: () => set({ items: [] }),
      totalCents: () =>
        get().items.reduce(
          (sum, x) => sum + x.priceCents * x.qty,
          0
        )
    }),
    { name: "ecom-cart" }
  )
);