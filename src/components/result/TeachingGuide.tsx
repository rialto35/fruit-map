'use client';

import type { TeachingMethod, TeachingAxis } from '@/lib/types';

interface Props {
  method: TeachingMethod;
  mbti: string;
}

const AXIS_ICONS: Record<string, string> = {
  classFormat: '🏫',
  explanationStyle: '💡',
  persuasionApproach: '🎯',
  progressStructure: '📋',
};

const AXIS_LABELS: Record<string, string> = {
  classFormat: '수업 형태',
  explanationStyle: '설명 방식',
  persuasionApproach: '설득 포인트',
  progressStructure: '진행 구조',
};

function AxisCard({ axisKey, axis }: { axisKey: string; axis: TeachingAxis }) {
  return (
    <div className="bg-[#FAFAF7] rounded-xl p-4 border border-[#EDE7DF]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{AXIS_ICONS[axisKey]}</span>
        <span className="text-[13px] font-bold text-[#3D3225]">{AXIS_LABELS[axisKey]}</span>
        <span className="ml-auto text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#7B61FF] text-white">{axis.type}</span>
      </div>
      <div className="text-sm font-semibold text-[#5B4BC9] mb-1">{axis.title}</div>
      <p className="text-xs text-[#6B5D4D] mb-2 leading-relaxed">{axis.description}</p>
      <ul className="m-0 pl-4 flex flex-col gap-1">
        {axis.tips.map((tip, i) => (
          <li key={i} className="text-xs text-[#5C4F3D] leading-relaxed">{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default function TeachingGuide({ method, mbti }: Props) {
  const axes: [string, TeachingAxis][] = [
    ['classFormat', method.classFormat],
    ['explanationStyle', method.explanationStyle],
    ['persuasionApproach', method.persuasionApproach],
    ['progressStructure', method.progressStructure],
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-base font-extrabold text-[#2C2417]">🎯 MBTI 교수법 가이드</h3>
        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#5B4BC9] text-white">
          {mbti}
        </span>
      </div>
      <p className="text-xs text-[#8A7D6B] mb-4">{method.summary}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {axes.map(([key, axis]) => (
          <AxisCard key={key} axisKey={key} axis={axis} />
        ))}
      </div>
    </div>
  );
}
