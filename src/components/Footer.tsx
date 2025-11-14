import Container from "./Container";

const shop = ["New arrivals", "Everyday sets", "Gift cards"];
const help = ["Shipping & returns", "Size guide", "Contact support"];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white/90">
      <Container className="grid gap-10 py-12 text-sm text-gray-600 md:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <p className="text-base font-semibold text-gray-900">Vihanic Touches</p>
          <p>Small-batch essentials designed in villages and shipped worldwide. Natural fabrics, honest pricing.</p>
          <p className="text-xs text-gray-400">
            (c) {new Date().getFullYear()} Vihanic Touches. All rights reserved.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Shop</p>
          <ul className="mt-3 space-y-2">
            {shop.map((item) => (
              <li key={item}>
                <a className="transition hover:text-gray-900" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Support</p>
          <ul className="mt-3 space-y-2">
            {help.map((item) => (
              <li key={item}>
                <a className="transition hover:text-gray-900" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
