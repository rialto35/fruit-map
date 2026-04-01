'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import type { ChecklistData, Dimension, MatchResult, TeachingMethod } from '@/lib/types';
import ProfileHeader from './ProfileHeader';
import DimensionRadarChart from './DimensionRadarChart';
import WarningCards from './WarningCards';
import PaceInfo from './PaceInfo';
import TeachingGuide from './TeachingGuide';
import CurriculumRoadmap from './CurriculumRoadmap';

interface ResultPayload {
  data: ChecklistData;
  dims: Dimension[];
  match: MatchResult;
  teaching: TeachingMethod | null;
}

export default function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const encoded = searchParams.get('d');

  if (!encoded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
        <div className="text-center">
          <p className="text-[#6B5D4D] mb-4">분석 데이터가 없습니다.</p>
          <button onClick={() => router.push('/')} className="px-6 py-2 bg-[#C4A573] text-white rounded-lg font-semibold">
            처음으로
          </button>
        </div>
      </div>
    );
  }

  let payload: ResultPayload;
  try {
    payload = JSON.parse(decodeURIComponent(atob(encoded)));
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
        <div className="text-center">
          <p className="text-[#6B5D4D] mb-4">데이터를 불러올 수 없습니다.</p>
          <button onClick={() => router.push('/')} className="px-6 py-2 bg-[#C4A573] text-white rounded-lg font-semibold">
            처음으로
          </button>
        </div>
      </div>
    );
  }

  const { data, dims, match, teaching } = payload;
  const isCompressed = (match.dims?.retention ?? 100) < 40;

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

        {teaching && data.mbti && data.mbti !== '모름' && (
          <TeachingGuide method={teaching} mbti={data.mbti} />
        )}

        <CurriculumRoadmap
          lessons={match.lessons}
          compressedIds={match.compressedIds}
          isCompressed={isCompressed}
        />

        <div className="text-center pt-4 border-t border-[#EDE7DF]">
          <p className="text-[11px] text-[#A69680]">열매맵 v1.0 · 영적 성장 맞춤 교육 설계</p>
        </div>
      </div>
    </div>
  );
}
