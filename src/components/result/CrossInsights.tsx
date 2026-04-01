'use client';

import type { CrossPattern } from '@/lib/cross-analysis';

interface Props {
  patterns: CrossPattern[];
}

export default function CrossInsights({ patterns }: Props) {
  if (patterns.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-base font-extrabold text-[#2C2417] mb-1">🔬 심층 인사이트</h3>
      <p className="text-xs text-[#8A7D6B] mb-4">교차 차원 분석에서 발견된 패턴</p>

      <div className="flex flex-col gap-3">
        {patterns.map(p => (
          <div
            key={p.id}
            className="bg-[#FAFAF7] rounded-xl p-4 border border-[#EDE7DF]"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{p.icon}</span>
              <span className="text-[14px] font-bold text-[#2C2417]">{p.name}</span>
            </div>
            <p className="text-[13px] text-[#6B5D4D] leading-relaxed mb-2">
              {p.insight}
            </p>
            <div className="bg-[#EFF6FF] rounded-lg px-3 py-2 border-l-3 border-[#4A90D9]">
              <span className="text-xs font-semibold text-[#4A90D9]">💡 인도자 액션</span>
              <p className="text-[13px] text-[#1E3A5F] leading-relaxed mt-0.5">
                {p.action}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
