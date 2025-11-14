"use client";

type Props = {
  value: number;
  onChange: (v: number) => void;
  min?: number;
};

export default function Quantity({ value, onChange, min = 1 }: Props) {
  const handleDecrease = () => onChange(Math.max(min, value - 1));
  const handleIncrease = () => onChange(value + 1);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="h-7 w-7 rounded-full border border-gray-200 text-gray-700 transition hover:border-gray-400"
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="min-w-[2ch] text-center font-medium text-gray-900">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="h-7 w-7 rounded-full border border-gray-200 text-gray-700 transition hover:border-gray-400"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
