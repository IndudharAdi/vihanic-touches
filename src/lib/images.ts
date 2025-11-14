const FALLBACK = "https://picsum.photos/600?blur=2";

export function resolveProductImage(url?: string | null): string {
  if (!url) {
    return FALLBACK;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const base = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL?.replace(/\/$/, "");

  if (!base) {
    return url;
  }

  return `${base}/${url.replace(/^\//, "")}`;
}
