'use client';

import type { MatchResult } from '@/lib/types';

interface Props {
  name: string;
  match: MatchResult;
}

export default function ProfileHeader({ name, match }: Props) {
  return (
    <div className="text-center mb-6">
      <div className="text-5xl mb-2">{match.typeIcon}</div>
      <h1 className="text-[22px] font-extrabold text-[#2C2417] my-1">
        {name || '열매'}님의 영적 성장 프로파일
      </h1>
      <div className="inline-block px-4 py-1.5 rounded-[20px] bg-gradient-to-br from-[#7B61FF] to-[#5B4BC9] text-white font-bold text-[15px] mt-2">
        {match.typeName}
      </div>
      <p className="text-[13px] text-[#6B5D4D] mt-2.5 leading-relaxed">{match.typeDesc}</p>
    </div>
  );
}
