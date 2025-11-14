// components/KPI.tsx
type KPIProps = {
  label: string;
  value: string;
  delta?: string;
};

export default function KPI({ label, value, delta }: KPIProps) {
  return (
    <div className="rounded-2xl bg-white/5 px-4 py-3 flex flex-col justify-between gap-2 min-h-[80px]">
      {/* label */}
      <p className="text-[11px] leading-snug text-white/70 break-words">
        {label}
      </p>

      {/* value + delta */}
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="text-lg font-semibold text-white break-words">
          {value}
        </span>
        {delta && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-200 whitespace-nowrap">
            {delta}
          </span>
        )}
      </div>
    </div>
  );
}
