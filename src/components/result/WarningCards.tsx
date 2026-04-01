'use client';

import type { Warning, WarningLevel } from '@/lib/types';

interface Props {
  warnings: Warning[];
}

const LEVEL_STYLE: Record<WarningLevel, { bg: string; border: string; text: string; icon: string; label: string }> = {
  critical: { bg: 'bg-[#FFF0F0]', border: 'border-[#FFCDD2]', text: 'text-[#B71C1C]', icon: '🔴', label: '즉시 조치' },
  caution: { bg: 'bg-[#FFF8E1]', border: 'border-[#FFE082]', text: 'text-[#E65100]', icon: '🟠', label: '주의 필요' },
  note: { bg: 'bg-[#FFF5F5]', border: 'border-[#FFCDD2]', text: 'text-[#C62828]', icon: '⚠️', label: '참고' },
};

export default function WarningCards({ warnings }: Props) {
  if (warnings.length === 0) return null;

  // 우선순위 정렬: critical → caution → note
  const sorted = [...warnings].sort((a, b) => {
    const order: Record<WarningLevel, number> = { critical: 0, caution: 1, note: 2 };
    return order[a.level] - order[b.level];
  });

  return (
    <div className="mb-5 flex flex-col gap-2">
      {sorted.map((w, i) => {
        const s = LEVEL_STYLE[w.level];
        return (
          <div key={i} className={`${s.bg} border ${s.border} rounded-xl px-4 py-3`}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-sm">{s.icon}</span>
              <span className={`text-[11px] font-bold ${s.text}`}>{s.label}</span>
            </div>
            <div className={`text-[13px] ${s.text} leading-relaxed`}>{w.message}</div>
          </div>
        );
      })}
    </div>
  );
}
