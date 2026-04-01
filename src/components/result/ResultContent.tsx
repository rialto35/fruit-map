'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { ChecklistData, Dimension, MatchResult, TeachingMethod } from '@/lib/types';
import type { CrossPattern } from '@/lib/cross-analysis';
import type { CounselingResult } from '@/lib/counseling';
import type { CompatibilityResult } from '@/lib/compatibility';
import type { EnneagramType } from '@/lib/enneagram';
import type { MbtiProfile } from '@/lib/profiles-data';
import ProfileHeader from './ProfileHeader';
import OneLineMessage from './OneLineMessage';
import ProfileAnalysis from './ProfileAnalysis';
import ShadowSection from './ShadowSection';
import QuestionGuide from './QuestionGuide';
import DimensionRadarChart from './DimensionRadarChart';
import WarningCards from './WarningCards';
import PaceInfo from './PaceInfo';
import CrossInsights from './CrossInsights';
import TeachingGuide from './TeachingGuide';
import CounselingGuide from './CounselingGuide';
import CompatibilityCard from './CompatibilityCard';
import EnneagramInsight from './EnneagramInsight';
import CurriculumRoadmap from './CurriculumRoadmap';

interface ResultPayload {
  data: ChecklistData;
  dims: Dimension[];
  match: MatchResult;
  teaching: TeachingMethod | null;
  crossInsights: CrossPattern[];
  counseling: CounselingResult | null;
  oneliner: string;
  mbtiProfile: MbtiProfile | null;
  brainTop3: { concern: string; top3: string[] }[];
  compatibility: CompatibilityResult[];
  enneagram: EnneagramType | null;
}

function EmptyState({ message }: { message: string }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
      <div className="text-center">
        <p className="text-[#6B5D4D] mb-4">{message}</p>
        <button onClick={() => router.push('/')} className="px-6 py-2 bg-[#C4A573] text-white rounded-lg font-semibold">처음으로</button>
      </div>
    </div>
  );
}

const TABS = [
  { key: 'counseling', label: '📋 상담 가이드', desc: '복음방 전 · 만남 준비' },
  { key: 'curriculum', label: '📚 커리큘럼', desc: '복음방 중 · 교육 진행' },
] as const;
type TabKey = typeof TABS[number]['key'];

export default function ResultContent() {
  const router = useRouter();
  const [payload, setPayload] = useState<ResultPayload | null>(null);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('counseling');

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('fruitmap-result');
      if (!raw) { setError(true); return; }
      setPayload(JSON.parse(raw));
    } catch { setError(true); }
  }, []);

  if (error) return <EmptyState message="분석 데이터가 없습니다." />;
  if (!payload) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5]">
      <p className="text-[#8A7D6B]">로딩 중...</p>
    </div>
  );

  const { data, dims, match, teaching, crossInsights, counseling, oneliner, mbtiProfile, brainTop3, compatibility, enneagram } = payload;
  const isCompact = match.lessons.some(l => l.phase === 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
      <div className="max-w-[560px] mx-auto bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
        <button onClick={() => router.push('/')} className="border-none bg-transparent text-[#8A7D6B] text-[13px] cursor-pointer p-0 mb-3">
          ← 입력으로 돌아가기
        </button>

        {/* ① 프로파일 헤더 */}
        <ProfileHeader name={data.name || ''} match={match} />

        {/* ② 한 문장 */}
        <OneLineMessage message={oneliner || ''} />

        {/* ③ 종합 분석 (MBTI) */}
        {mbtiProfile && data.mbti && data.mbti !== '모름' && (
          <ProfileAnalysis mbti={data.mbti} profile={mbtiProfile} brainTop3={brainTop3 || []} />
        )}

        {/* ④ 그림자 영역 */}
        {mbtiProfile && <ShadowSection shadow={mbtiProfile.shadow} />}

        {/* ⑤ 질문 가이드 */}
        {mbtiProfile && <QuestionGuide hookQuestions={mbtiProfile.hookQuestions} avoidQuestions={mbtiProfile.avoidQuestions} />}

        {/* ⑥ 6차원 레이더 차트 */}
        <DimensionRadarChart dimensions={dims} />

        {/* ⑦ 경고 시스템 */}
        <WarningCards warnings={match.warnings} />

        {/* ⑧ 진행 속도 */}
        <PaceInfo pace={match.pace} totalWeeks={match.totalWeeks} />

        {/* 탭 */}
        <div className="flex gap-2 mb-5 sticky top-0 z-10 bg-white pt-2 pb-1 -mx-1 px-1">
          {TABS.map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-2.5 px-3 rounded-xl border-[1.5px] text-center transition-all ${
                activeTab === tab.key
                  ? 'bg-gradient-to-br from-[#7B61FF] to-[#5B4BC9] text-white border-transparent shadow-[0_2px_8px_rgba(123,97,255,0.25)]'
                  : 'bg-[#FAFAF7] text-[#6B5D4D] border-[#DDD5C9]'
              }`}
            >
              <div className="text-[14px] font-bold">{tab.label}</div>
              <div className={`text-[10px] mt-0.5 ${activeTab === tab.key ? 'text-white/70' : 'text-[#A69680]'}`}>{tab.desc}</div>
            </button>
          ))}
        </div>

        {/* 탭 1: 상담 가이드 */}
        {activeTab === 'counseling' && (
          <>
            {/* ⑨ 상담 가이드 */}
            {counseling && <CounselingGuide guide={counseling} />}
            {!counseling && (
              <div className="text-center py-8 text-[#A69680] text-sm">
                고민(싹) 항목을 선택하면 맞춤 상담 가이드가 생성됩니다.
              </div>
            )}

            {/* ⑩ 심층 인사이트 */}
            <CrossInsights patterns={crossInsights || []} />

            {/* ⑫ 인도자-열매 궁합 */}
            <CompatibilityCard results={compatibility || []} />

            {/* 에니어그램 (상담 관점) */}
            {enneagram && <EnneagramInsight enneagram={enneagram} />}
          </>
        )}

        {/* 탭 2: 커리큘럼 */}
        {activeTab === 'curriculum' && (
          <>
            {/* ⑪ 교수법 가이드 */}
            {teaching && data.mbti && data.mbti !== '모름' && (
              <TeachingGuide method={teaching} mbti={data.mbti} />
            )}

            {/* 에니어그램 (교육 관점) */}
            {enneagram && <EnneagramInsight enneagram={enneagram} />}

            {/* ⑬ 커리큘럼 로드맵 */}
            <CurriculumRoadmap lessons={match.lessons} isCompact={isCompact} />
          </>
        )}

        {/* ⑭ 푸터 */}
        <div className="text-center pt-4 border-t border-[#EDE7DF]">
          <p className="text-[11px] text-[#A69680] mb-1">이 분석은 참고 자료입니다. 최종 판단은 인도자가 합니다.</p>
          <p className="text-[10px] text-[#C4B89C]">열매맵 v2.0 · 영적 성장 맞춤 교육 설계</p>
        </div>
      </div>
    </div>
  );
}
