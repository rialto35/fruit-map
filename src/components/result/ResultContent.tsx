'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { ChecklistData, Dimension, MatchResult, TeachingMethod } from '@/lib/types';
import type { CrossPattern } from '@/lib/cross-analysis';
import type { CounselingResult } from '@/lib/counseling';
import ProfileHeader from './ProfileHeader';
import DimensionRadarChart from './DimensionRadarChart';
import WarningCards from './WarningCards';
import PaceInfo from './PaceInfo';
import CrossInsights from './CrossInsights';
import TeachingGuide from './TeachingGuide';
import CounselingGuide from './CounselingGuide';
import CurriculumRoadmap from './CurriculumRoadmap';

interface ResultPayload {
  data: ChecklistData;
  dims: Dimension[];
  match: MatchResult;
  teaching: TeachingMethod | null;
  crossInsights: CrossPattern[];
  counseling: CounselingResult | null;
}

function EmptyState({ message }: { message: string }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
      <div className="text-center">
        <p className="text-[#6B5D4D] mb-4">{message}</p>
        <button onClick={() => router.push('/')} className="px-6 py-2 bg-[#C4A573] text-white rounded-lg font-semibold">
          처음으로
        </button>
      </div>
    </div>
  );
}

export default function ResultContent() {
  const router = useRouter();
  const [payload, setPayload] = useState<ResultPayload | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('fruitmap-result');
      if (!raw) { setError(true); return; }
      setPayload(JSON.parse(raw));
    } catch {
      setError(true);
    }
  }, []);

  if (error) return <EmptyState message="분석 데이터가 없습니다." />;
  if (!payload) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5]">
      <p className="text-[#8A7D6B]">로딩 중...</p>
    </div>
  );

  const { data, dims, match, teaching, crossInsights, counseling } = payload;
  const isCompact = match.lessons.some(l => l.phase === 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
      <div className="max-w-[560px] mx-auto bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
        <button
          onClick={() => router.push('/')}
          className="border-none bg-transparent text-[#8A7D6B] text-[13px] cursor-pointer p-0 mb-3"
        >
          ← 입력으로 돌아가기
        </button>

        <ProfileHeader name={data.name || ''} match={match} />
        <DimensionRadarChart dimensions={dims} />
        <WarningCards warnings={match.warnings} />
        <PaceInfo pace={match.pace} totalWeeks={match.totalWeeks} />
        <CrossInsights patterns={crossInsights || []} />

        {teaching && data.mbti && data.mbti !== '모름' && (
          <TeachingGuide method={teaching} mbti={data.mbti} />
        )}

        {counseling && <CounselingGuide guide={counseling} />}

        <CurriculumRoadmap
          lessons={match.lessons}
          isCompact={isCompact}
        />

        <div className="text-center pt-4 border-t border-[#EDE7DF]">
          <p className="text-[11px] text-[#A69680]">열매맵 v1.0 · 영적 성장 맞춤 교육 설계</p>
        </div>
      </div>
    </div>
  );
}
