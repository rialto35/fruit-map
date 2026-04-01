'use client';

import { useState } from 'react';
import type { CounselingResult } from '@/lib/counseling';

interface Props {
  guide: CounselingResult;
}

function Section({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-[#EDE7DF] rounded-xl overflow-hidden mb-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-3 bg-[#FAF7F2] text-left border-none cursor-pointer"
      >
        <span className="text-[13px] font-bold text-[#3D3225] flex-1">{title}</span>
        <span className="text-xs text-[#A69680]">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="px-4 py-3">{children}</div>}
    </div>
  );
}

export default function CounselingGuide({ guide }: Props) {
  const { type, concerns, stories, crossSupplements } = guide;

  return (
    <div className="mb-6">
      <h3 className="text-base font-extrabold text-[#2C2417] mb-1">📋 상담 가이드</h3>
      <p className="text-xs text-[#8A7D6B] mb-4">육적 상담 (복음방 진입 전, 비종교적 접근)</p>

      {/* 상담 원칙 요약 */}
      <div className="bg-gradient-to-br from-[#F8F6FF] to-[#F0EDFF] rounded-xl p-4 mb-3 border border-[#E0D8F0]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{type.icon}</span>
          <span className="text-[14px] font-bold text-[#3D3270]">상담 톤: {type.tone}</span>
        </div>
        <p className="text-[13px] text-[#5C4F3D] leading-relaxed mb-3">{type.core_principle}</p>
        <div className="flex gap-3 text-xs">
          <div className="bg-white rounded-lg px-3 py-1.5 border border-[#E0D8F0]">
            <span className="text-[#8A7D6B]">세션</span>{' '}
            <span className="font-bold text-[#3D3270]">{type.session_length}</span>
          </div>
          <div className="bg-white rounded-lg px-3 py-1.5 border border-[#E0D8F0] flex-1">
            <span className="text-[#8A7D6B]">전환 시점</span>{' '}
            <span className="font-semibold text-[#5C4F3D]">{type.transition_to_education}</span>
          </div>
        </div>
      </div>

      {/* 접근 순서 */}
      <Section title="📌 접근 순서" defaultOpen={true}>
        <ol className="list-none p-0 m-0 flex flex-col gap-1.5">
          {type.approach_order.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-[#3D3225]">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#7B61FF] text-white text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </Section>

      {/* DO / DON'T */}
      <Section title="✅ DO / ❌ DON'T">
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-xs font-bold text-[#2E7D32] mb-1">✅ DO</div>
            <ul className="m-0 pl-4 flex flex-col gap-1">
              {type.do.map((d, i) => (
                <li key={i} className="text-[12px] text-[#3D3225] leading-relaxed">{d}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold text-[#C62828] mb-1">❌ DON&apos;T</div>
            <ul className="m-0 pl-4 flex flex-col gap-1">
              {type.dont.map((d, i) => (
                <li key={i} className="text-[12px] text-[#6B5D4D] leading-relaxed">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 고민별 콘텐츠 */}
      {concerns.length > 0 && concerns.map(({ key, guide: cg }) => (
        <Section key={key} title={`${cg.icon} ${key}`}>
          <div className="flex flex-col gap-3">
            <p className="text-[12px] text-[#6B5D4D] italic m-0">💬 {cg.empathy_point}</p>

            {/* 인도자 멘트 */}
            <div>
              <div className="text-xs font-bold text-[#3D3225] mb-1">🗣️ 인도자 멘트</div>
              <div className="flex flex-col gap-1">
                {cg.mentor_phrases.map((p, i) => (
                  <div key={i} className="text-[12px] text-[#5C4F3D] bg-[#F8F8F6] rounded-lg px-3 py-1.5 leading-relaxed">
                    &ldquo;{p}&rdquo;
                  </div>
                ))}
              </div>
            </div>

            {/* 가이드 질문 */}
            <div>
              <div className="text-xs font-bold text-[#3D3225] mb-1">❓ 가이드 질문</div>
              <ul className="m-0 pl-4 flex flex-col gap-0.5">
                {cg.guide_questions.map((q, i) => (
                  <li key={i} className="text-[12px] text-[#5C4F3D]">{q}</li>
                ))}
              </ul>
            </div>

            {/* 주의사항 */}
            <div>
              <div className="text-xs font-bold text-[#C62828] mb-1">⚠️ 주의</div>
              <ul className="m-0 pl-4 flex flex-col gap-0.5">
                {cg.caution.map((c, i) => (
                  <li key={i} className="text-[12px] text-[#B71C1C]">{c}</li>
                ))}
              </ul>
            </div>

            {/* 실천 팁 */}
            <div className="bg-[#EFF6FF] rounded-lg px-3 py-2 border-l-2 border-[#4A90D9]">
              <span className="text-[11px] font-bold text-[#4A90D9]">💡 실천 팁</span>
              <p className="text-[12px] text-[#1E3A5F] m-0 mt-0.5 leading-relaxed">{cg.practical_tip}</p>
            </div>
          </div>
        </Section>
      ))}

      {/* 추천 예화 */}
      {stories.length > 0 && (
        <Section title={`📖 추천 예화 (${stories.length}개)`}>
          <div className="flex flex-col gap-3">
            {stories.map((s, i) => (
              <div key={i} className="bg-[#FAFAF7] rounded-xl p-3 border border-[#EDE7DF]">
                <div className="text-[11px] text-[#8A7D6B] mb-1">{s.concern}</div>
                <div className="text-[13px] font-bold text-[#2C2417] mb-1">{s.title}</div>
                <p className="text-[12px] text-[#5C4F3D] leading-relaxed m-0 mb-1.5">{s.content}</p>
                <div className="text-[11px] font-semibold text-[#7B61FF]">→ {s.point}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* 교차패턴 보완 */}
      {crossSupplements.length > 0 && (
        <Section title="🔬 교차패턴 보완 전략">
          <div className="flex flex-col gap-2">
            {crossSupplements.map((cs, i) => (
              <div key={i} className="bg-[#FFF8E1] rounded-lg p-3 border border-[#FFE082]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span>{cs.icon}</span>
                  <span className="text-[12px] font-bold text-[#3D3225]">{cs.name}</span>
                </div>
                <p className="text-[12px] text-[#5C4F3D] m-0 mb-1">{cs.counseling_supplement}</p>
                <p className="text-[11px] text-[#E65100] m-0 mb-1">⚠️ {cs.risk}</p>
                <p className="text-[12px] text-[#4A90D9] m-0 font-semibold">❓ {cs.extra_question}</p>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
