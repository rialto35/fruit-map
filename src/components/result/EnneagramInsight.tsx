'use client';

import type { EnneagramType } from '@/lib/enneagram';

interface Props {
  enneagram: EnneagramType;
}

export default function EnneagramInsight({ enneagram }: Props) {
  return (
    <div className="mb-5">
      <h4 className="text-[14px] font-bold text-[#2C2417] mb-3">🔮 에니어그램 인사이트</h4>
      <div className="bg-[#FAFAF7] rounded-xl p-4 border border-[#EDE7DF]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{enneagram.icon}</span>
          <div>
            <div className="text-[14px] font-bold text-[#2C2417]">{enneagram.number}번 {enneagram.name}</div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div>
            <div className="text-[11px] font-bold text-[#C62828] mb-0.5">🚫 영적 블로커</div>
            <p className="text-[12px] text-[#5C4F3D] leading-relaxed m-0">{enneagram.spiritual_blocker}</p>
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#2E7D32] mb-0.5">🌱 성장 방향</div>
            <p className="text-[12px] text-[#5C4F3D] leading-relaxed m-0">{enneagram.growth_direction}</p>
          </div>
          <div className="bg-[#EFF6FF] rounded-lg px-3 py-2 border-l-2 border-[#4A90D9]">
            <div className="text-[11px] font-bold text-[#4A90D9] mb-0.5">📖 커리큘럼 연결</div>
            <p className="text-[12px] text-[#1E3A5F] leading-relaxed m-0">{enneagram.curriculum_note}</p>
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#6B5D4D] mb-0.5">🌑 그림자 영역</div>
            <p className="text-[12px] text-[#8A7D6B] leading-relaxed m-0">{enneagram.shadow}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
