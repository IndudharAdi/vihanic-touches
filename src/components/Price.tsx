import { formatPrice } from "@/lib/format";

type Props = {
  cents: number;
  currency?: string;
  className?: string;
};

export default function Price({ cents, currency = "USD", className = "" }: Props) {
  const classes = ["text-sm font-semibold text-gray-900", className].filter(Boolean).join(" ");
  return <span className={classes}>{formatPrice(cents, currency)}</span>;
}
