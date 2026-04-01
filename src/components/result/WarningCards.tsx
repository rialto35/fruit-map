'use client';

interface Props {
  warnings: string[];
}

export default function WarningCards({ warnings }: Props) {
  if (warnings.length === 0) return null;

  return (
    <div className="bg-[#FFF5F5] border border-[#FFCDD2] rounded-xl px-4 py-3.5 mb-5">
      <h4 className="text-sm font-bold text-[#C62828] mb-2">⚠️ 주의사항</h4>
      {warnings.map((w, i) => (
        <div key={i} className="text-[13px] text-[#B71C1C] leading-relaxed pl-2 border-l-2 border-[#EF9A9A] mb-1.5">
          {w}
        </div>
      ))}
    </div>
  );
}
