'use client';

import type { MbtiProfile } from '@/lib/profiles-data';

interface Props {
  mbti: string;
  profile: MbtiProfile;
  brainTop3: { concern: string; top3: string[] }[];
}

export default function ProfileAnalysis({ mbti, profile, brainTop3 }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-extrabold text-[#2C2417] mb-1">
        👤 종합 분석 <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#5B4BC9] text-white ml-1">{mbti}</span>
      </h3>

      {/* 서술 */}
      <p className="text-[13px] text-[#5C4F3D] leading-relaxed mb-3">{profile.summary}</p>

      {/* 키워드 */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {profile.keywords.map((kw, i) => (
          <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F0EDFF] text-[#5B4BC9] border border-[#E0D8F0]">
            #{kw}
          </span>
        ))}
      </div>

      {/* 뇌구조 */}
      <div className="bg-[#FAF7F2] rounded-xl p-3.5 border border-[#EDE7DF] mb-3">
        <div className="text-[12px] font-bold text-[#3D3225] mb-1.5">🧠 뇌구조</div>
        <p className="text-[12px] text-[#5C4F3D] leading-relaxed m-0 mb-2">{profile.brainStructure.description}</p>
        <div className="flex gap-1.5">
          {profile.brainStructure.topPriorities.map((p, i) => (
            <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-[#E8E0D5] text-[#5C4F3D]">
              {i + 1}. {p}
            </span>
          ))}
        </div>
      </div>

      {/* 고민별 뇌구조 Top 3 */}
      {brainTop3.length > 0 && (
        <div className="bg-[#FFF8F0] rounded-xl p-3.5 border border-[#FFE0B2] mb-3">
          <div className="text-[12px] font-bold text-[#E65100] mb-1.5">🎯 지금 이 열매의 머릿속</div>
          <div className="flex flex-col gap-1.5">
            {brainTop3.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[11px] text-[#8A7D6B] shrink-0 w-24">{item.concern}</span>
                <div className="flex gap-1">
                  {item.top3.map((t, j) => (
                    <span key={j} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#E65100] border border-[#FFE0B2]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 환경 + 소통 + 동기 */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-2 text-[12px] bg-white rounded-lg px-3 py-2 border border-[#EDE7DF]">
          <span className="shrink-0">🏠</span>
          <span className="text-[#5C4F3D]"><b className="text-[#6B5D4D]">선호 환경</b> {profile.preferredEnvironment}</span>
        </div>
        <div className="flex items-start gap-2 text-[12px] bg-white rounded-lg px-3 py-2 border border-[#EDE7DF]">
          <span className="shrink-0">💬</span>
          <span className="text-[#5C4F3D]"><b className="text-[#6B5D4D]">소통 방식</b> {profile.communicationStyle}</span>
        </div>
        <div className="flex items-start gap-2 text-[12px] bg-[#EFF6FF] rounded-lg px-3 py-2 border border-[#BBDEFB]">
          <span className="shrink-0">🔑</span>
          <span className="text-[#1E3A5F]"><b className="text-[#4A90D9]">동기 트리거</b> {profile.motivationTrigger}</span>
        </div>
      </div>
    </div>
  );
}
