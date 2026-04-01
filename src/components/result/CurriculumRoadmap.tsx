'use client';

import type { LessonPlan, LessonPriority, LessonCategory } from '@/lib/types';
import { CAT_COLORS, CAT_ICONS } from '@/lib/curriculum';

interface Props {
  lessons: LessonPlan[];
  compressedIds: number[];
  isCompressed: boolean;
}

const PRIO_STYLE: Record<LessonPriority, { bg: string; border: string; label: string; labelBg: string }> = {
  essential: { bg: 'bg-[#FFF3E0]', border: 'border-[#E8913A]', label: '필수', labelBg: 'bg-[#E8913A]' },
  emphasis: { bg: 'bg-[#F3E8FF]', border: 'border-[#7B61FF]', label: '강조', labelBg: 'bg-[#7B61FF]' },
  normal: { bg: 'bg-[#F8F8F6]', border: 'border-[#DDD5C9]', label: '', labelBg: '' },
  optional: { bg: 'bg-[#F0F0F0]', border: 'border-[#CCC]', label: '선택', labelBg: 'bg-[#999]' },
};

export default function CurriculumRoadmap({ lessons, compressedIds, isCompressed }: Props) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-extrabold text-[#2C2417] mb-1">📚 맞춤 커리큘럼 로드맵</h3>
      <p className="text-xs text-[#8A7D6B] mb-4">
        {isCompressed
          ? '⚡ 압축 코스 — 핵심 10과 우선 이수 후 나머지 진행'
          : '전체 20과 순차 진행, 강조/반복 과정 표시'}
      </p>

      <div className="flex flex-col gap-2">
        {lessons.map(lesson => {
          const ps = PRIO_STYLE[lesson.priority];
          const inCompressed = compressedIds.includes(lesson.id);
          const dimmed = isCompressed && !inCompressed;

          return (
            <div
              key={lesson.id}
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
                  {dimmed && <span className="text-[10px] text-[#999]">후순위</span>}
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
        })}
      </div>
    </div>
  );
}
