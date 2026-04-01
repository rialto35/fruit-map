'use client';

import type { LessonPlan, LessonPriority, LessonCategory } from '@/lib/types';
import { CAT_COLORS, CAT_ICONS } from '@/lib/curriculum';

interface Props {
  lessons: LessonPlan[];
  isCompact: boolean;
}

const PRIO_STYLE: Record<LessonPriority, { bg: string; border: string; label: string; labelBg: string }> = {
  essential: { bg: 'bg-[#FFF3E0]', border: 'border-[#E8913A]', label: '필수', labelBg: 'bg-[#E8913A]' },
  emphasis: { bg: 'bg-[#F3E8FF]', border: 'border-[#7B61FF]', label: '강조', labelBg: 'bg-[#7B61FF]' },
  normal: { bg: 'bg-[#F8F8F6]', border: 'border-[#DDD5C9]', label: '', labelBg: '' },
  optional: { bg: 'bg-[#F0F0F0]', border: 'border-[#CCC]', label: '선택', labelBg: 'bg-[#999]' },
};

function LessonCard({ lesson, dimmed }: { lesson: LessonPlan; dimmed: boolean }) {
  const ps = PRIO_STYLE[lesson.priority];

  return (
    <div
      className={`flex items-start gap-2.5 px-3.5 py-3 rounded-xl border-[1.5px] transition-all ${
        dimmed ? 'bg-[#F5F5F5] border-[#E0E0E0] opacity-50' : `${ps.bg} ${ps.border}`
      }`}
    >
      <div
        className="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-bold shrink-0"
        style={{ backgroundColor: CAT_COLORS[lesson.category as LessonCategory] }}
      >
        {lesson.id}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-sm font-bold text-[#2C2417]">{lesson.title}</span>
          {ps.label && (
            <span className={`text-[10px] font-bold text-white px-2 py-0.5 rounded-[10px] ${ps.labelBg}`}>
              {ps.label}
            </span>
          )}
          {lesson.repeat > 1 && (
            <span className="text-[10px] font-bold text-white bg-[#D94A6B] px-2 py-0.5 rounded-[10px]">
              ×{lesson.repeat} 반복
            </span>
          )}
          {dimmed && <span className="text-[10px] text-[#999]">2차</span>}
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span
            className="text-[11px] font-semibold"
            style={{ color: CAT_COLORS[lesson.category as LessonCategory] }}
          >
            {CAT_ICONS[lesson.category as LessonCategory]} {lesson.category}
          </span>
        </div>
        {lesson.note && (
          <div className="text-xs text-[#6B5D4D] mt-1 leading-relaxed italic">
            💬 {lesson.note}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CurriculumRoadmap({ lessons, isCompact }: Props) {
  // 압축형: 1차/2차 분리
  const phase1 = lessons.filter(l => l.phase === 1);
  const phase2 = lessons.filter(l => l.phase === 2);

  return (
    <div className="mb-5">
      <h3 className="text-base font-extrabold text-[#2C2417] mb-1">📚 맞춤 커리큘럼 로드맵</h3>
      <p className="text-xs text-[#8A7D6B] mb-4">
        {isCompact
          ? '⚡ 압축 코스 — 1차 핵심 10과 우선 이수 후 2차 확장 진행'
          : '※ 프로파일에 따라 재배치된 순서입니다'}
      </p>

      <div className="flex flex-col gap-2">
        {isCompact ? (
          <>
            {phase1.map(lesson => (
              <LessonCard key={lesson.id} lesson={lesson} dimmed={false} />
            ))}

            {phase2.length > 0 && (
              <>
                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 h-px bg-[#DDD5C9]" />
                  <span className="text-xs font-bold text-[#A69680] whitespace-nowrap">
                    ✂️ 2차 확장 (유지 시 진행)
                  </span>
                  <div className="flex-1 h-px bg-[#DDD5C9]" />
                </div>
                {phase2.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} dimmed={true} />
                ))}
              </>
            )}
          </>
        ) : (
          lessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} dimmed={false} />
          ))
        )}
      </div>
    </div>
  );
}
