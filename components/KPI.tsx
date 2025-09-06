// components/KPI.tsx
"use client";
import { motion } from "framer-motion";

export default function KPI({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
}) {
  const isPositive =
    (delta && /better|faster|less|lower/i.test(delta)) ||
    /^[+↑]/.test(value) ||
    /^-\d/.test(value) === false; // crude but fine for our badges

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="card px-4 py-3 flex items-center justify-between gap-4"
    >
      <span className="text-sm text-white/80">{label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-semibold">{value}</span>
        {delta && (
          <span
            className={`text-xs px-2 py-1 rounded-full border ${
              isPositive
                ? "bg-emerald-400/10 border-emerald-400/20 text-emerald-300"
                : "bg-rose-400/10 border-rose-400/20 text-rose-300"
            }`}
          >
            {delta}
          </span>
        )}
      </div>
    </motion.div>
  );
}
