'use client';

interface Props {
  pace: string;
  totalWeeks: string;
}

export default function PaceInfo({ pace, totalWeeks }: Props) {
  return (
    <div className="flex gap-3 mb-6">
      <div className="flex-1 bg-[#F0EDFF] rounded-xl px-4 py-3.5">
        <div className="text-[11px] text-[#6B5D9A] font-semibold mb-1">진행 속도</div>
        <div className="text-sm font-bold text-[#3D3270]">{pace}</div>
      </div>
      <div className="flex-1 bg-[#E8F5E9] rounded-xl px-4 py-3.5">
        <div className="text-[11px] text-[#2E7D32] font-semibold mb-1">예상 기간</div>
        <div className="text-sm font-bold text-[#1B5E20]">{totalWeeks}</div>
      </div>
    </div>
  );
}
