'use client';

import type { CompatibilityResult } from '@/lib/compatibility';

interface Props {
  results: CompatibilityResult[];
}

const ROLE_ICONS: Record<string, string> = { guide: '👼', teacher: '📚', servant: '🙏' };

function ScoreBar({ score }: { score: number }) {
  const color = score >= 80 ? '#2EAE6D' : score >= 60 ? '#E8913A' : '#D94A6B';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-[#EDE7DF] rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${score}%`, backgroundColor: color }} />
      </div>
      <span className="text-sm font-bold" style={{ color }}>{score}점</span>
    </div>
  );
}

export default function CompatibilityCard({ results }: Props) {
  if (results.length === 0) return null;

  return (
    <div className="mb-5">
      <h4 className="text-[14px] font-bold text-[#2C2417] mb-3">🤝 인교섬 궁합</h4>
      <div className="flex flex-col gap-2.5">
        {results.map(r => (
          <div key={r.role} className="bg-[#FAFAF7] rounded-xl p-3.5 border border-[#EDE7DF]">
            <div className="flex items-center gap-2 mb-2">
              <span>{ROLE_ICONS[r.role]}</span>
              <span className="text-[13px] font-bold text-[#3D3225]">{r.roleName}</span>
              <span className="text-xs text-[#8A7D6B]">{r.partnerMbti}</span>
              <span className="text-xs text-[#A69680]">×</span>
              <span className="text-xs text-[#8A7D6B]">열매 {r.fruitMbti}</span>
            </div>
            <ScoreBar score={r.score} />
            <div className="mt-2 flex flex-col gap-1">
              {r.tips.slice(0, 3).map((tip, i) => (
                <div key={i} className="text-[11px] text-[#5C4F3D] leading-relaxed">{tip}</div>
              ))}
            </div>
            <div className="mt-2 text-[11px] text-[#E65100] bg-[#FFF3E0] rounded-lg px-2.5 py-1.5">
              ⚠️ {r.caution}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
