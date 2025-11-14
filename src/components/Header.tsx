"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/stores/cart";
import { useEffect, useState } from "react";

function SearchTrigger() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const submitSearch = (event?: React.FormEvent) => {
    event?.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    router.push(`/products?q=${encodeURIComponent(trimmed)}`);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-3 rounded-full border border-gray-200 bg-white/60 px-4 py-2 text-sm text-gray-500 shadow-sm ring-offset-2 transition hover:-translate-y-0.5 hover:text-gray-900 hover:shadow-md md:inline-flex"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
          /
        </span>
        <span className="text-sm">Search collection</span>
        
      </button>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:text-gray-900 md:hidden"
        aria-label="Open search"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
          <path
            d="m14.5 13.5 3 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle
            cx="9"
            cy="9"
            r="5.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 py-16 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Search the catalog</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs text-gray-400 hover:text-gray-600"
              >
                Esc
              </button>
            </div>
            <form onSubmit={submitSearch} className="mt-4">
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-gray-500" aria-hidden>
                  <path
                    d="m14.5 13.5 3 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="9"
                    cy="9"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Try “organic cotton tee” or “handmade hoodie”"
                  className="flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Search
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs text-gray-500">Press Esc to close</p>
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const cart = useCart();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" }
  ];
  const itemCount = cart.items.reduce((sum, item) => sum + item.qty, 0);

  const linkClasses = (href: string) => {
    const isActive =
      href === "/"
        ? pathname === href
        : pathname?.startsWith(href);
    return `text-sm font-medium transition-colors ${
      isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/85 backdrop-blur">
      <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            Vihanic Touches
          </Link>
          <p className="text-xs text-gray-500">
            Everyday layers, made in small batches.
          </p>
        </div>

        <div className="flex w-full items-center justify-between gap-4 md:w-auto">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <SearchTrigger />

            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
            >
              <span>Bag</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
                {itemCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
