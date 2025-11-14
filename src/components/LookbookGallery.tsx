"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/public/lookbook/47a2332b-1a87-5230-98c7-e7afc6a35346.jpg",
    alt: "Cotton tees stacked in the studio"
  },
  {
    src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    alt: "Handmade sweatshirt details"
  },
  {
    src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80",
    alt: "Tailor working on fabric pieces"
  },
  {
    src: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/public/lookbook/df1cd578-8d3f-52ae-8160-9cb7c905eaf8.jpg",
    alt: "Assorted clothing items on a table"
  },
  {
    src: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/public/lookbook/fd811c7e-8552-540d-9646-86f839595aba.jpg",
    alt: "Designer sketching clothing designs"
  },
  {
    src: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/public/lookbook/fd811c7e-8552-540d-9646-86f839595aba.jpg",
    alt: "Sewing machine stitching fabric"
  },
  {
    src: "https://kkggkcqcrfyquuqjmqyf.supabase.co/storage/v1/object/public/lookbook/il_fullxfull.6978149423_e9zy.avif",
    alt: "Finished clothing items hanging on a rack"
  }

];

export default function LookbookGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-[24px] bg-[color:var(--surface-muted)]">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-2 w-6 rounded-full transition ${
              i === index ? "bg-white shadow" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
