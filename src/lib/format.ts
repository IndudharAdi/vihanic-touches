export const formatPrice = (cents: number, currency = "USD") =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency
  }).format(cents / 100);