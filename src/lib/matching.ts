import type { ChecklistData, Dimension, MatchResult, LessonPlan, LessonPriority } from './types';
import { CURRICULUM } from './curriculum';

export function generateMatching(dims: Dimension[], data: ChecklistData): MatchResult {
  const d: Record<string, number> = {};
  dims.forEach(dm => { d[dm.key] = dm.score; });

  // 7개 유형 분류 (우선순위: 위→아래)
  let typeName: string, typeDesc: string, typeIcon: string;
  if (d.sensitivity >= 70 && d.receptivity >= 60) {
    typeName = '영적 수용형'; typeIcon = '🕊️';
    typeDesc = '영적 감수성이 높고 복음에 열려있습니다. 핵심 교리를 중심으로 빠르게 진행할 수 있습니다.';
  } else if (d.receptivity < 40) {
    typeName = '관계 형성 우선형'; typeIcon = '🤝';
    typeDesc = '아직 마음이 열리지 않은 상태입니다. 관계 형성과 동기부여에 충분한 시간이 필요합니다.';
  } else if (d.sensitivity < 40 && d.receptivity >= 40) {
    typeName = '논리적 탐구형'; typeIcon = '🔍';
    typeDesc = '영적 감수성은 낮지만 관심은 있습니다. 역사적·논리적 접근이 효과적입니다.';
  } else if (d.stability < 40) {
    typeName = '돌봄 회복형'; typeIcon = '💛';
    typeDesc = '내적 불안정 요소가 있습니다. 기도·위로·돌봄 중심으로 안정을 먼저 확보해야 합니다.';
  } else if (d.retention < 40) {
    typeName = '핵심 압축형'; typeIcon = '⚡';
    typeDesc = '이탈 위험이 높습니다. 핵심 과정만 압축하여 빠르게 은혜를 경험하게 해야 합니다.';
  } else if (d.potential >= 70) {
    typeName = '성장 가속형'; typeIcon = '🚀';
    typeDesc = '성장 잠재력이 높습니다. 표준 속도보다 빠르게 진행하며 심화 질문을 활용하세요.';
  } else {
    typeName = '표준 양육형'; typeIcon = '📖';
    typeDesc = '전반적으로 균형 잡힌 상태입니다. 표준 커리큘럼 순서대로 진행하면 됩니다.';
  }

  // 20과별 priority/note/repeat
  const lessons: LessonPlan[] = CURRICULUM.map(c => {
    let priority: LessonPriority = 'normal';
    let note = '';
    let repeat = 1;

    // 입문 (1-2)
    if (c.id <= 2) {
      if (d.receptivity < 40) { priority = 'essential'; repeat = 2; note = '충분히 반복, 관계 형성 병행'; }
      else if (d.receptivity >= 70) { note = '빠르게 진행 가능'; }
      else { priority = 'essential'; note = '기초 다지기'; }
    }
    // 성경이해 (3-5)
    if (c.id >= 3 && c.id <= 5) {
      if (d.sensitivity < 40) { priority = 'emphasis'; note = '논리적 접근 — 질문 유도'; }
    }
    // 역사맥락 (6-9)
    if (c.id >= 6 && c.id <= 9) {
      if (d.sensitivity < 40) { priority = 'emphasis'; note = '이 영역이 핵심 설득 포인트'; }
      else if (d.retention < 40) { priority = 'optional'; note = '압축 시 생략 가능'; }
    }
    // 핵심교리 (10, 17, 20)
    if ([10, 17, 20].includes(c.id)) {
      if (d.sensitivity >= 60) { priority = 'emphasis'; note = '영적 감수성 높음 — 깊이 다루기'; }
      else { priority = 'essential'; note = '핵심 과정, 반드시 이수'; }
    }
    // 신앙성장 (11-16)
    if (c.id >= 11 && c.id <= 16) {
      if (c.id === 13 && d.stability < 50) { priority = 'emphasis'; note = '기도를 통한 내적 안정 우선'; repeat = 2; }
      if (c.id === 16 && d.stability < 50) { priority = 'emphasis'; note = '위로와 회복의 메시지 강조'; }
      if (c.id === 11 && d.potential >= 70) { priority = 'emphasis'; note = '자기 점검 — 어떤 밭인지 깊이 성찰'; }
    }
    // 영적분별 (18)
    if (c.id === 18) {
      const cultRisk = Number(data.cult_risk) || 1;
      if (cultRisk >= 3) { priority = 'essential'; repeat = 2; note = '이단 경험 있음 — 반드시 강조'; }
      else { note = '기본 분별력 교육'; }
    }
    // 영적성숙 (19)
    if (c.id === 19) {
      if (d.retention < 40) { priority = 'emphasis'; note = '핍박 속 인내의 메시지로 이탈 방지'; }
      else if (d.stability >= 70) { /* normal */ }
      else { priority = 'optional'; note = '안정 후 진행'; }
    }

    return { ...c, priority, note, repeat };
  });

  // 진행 속도
  let pace: string, totalWeeks: string;
  if (d.receptivity < 40 || d.retention < 40) {
    pace = '느리게 (주 1회, 과당 2~3회)';
    totalWeeks = '40~50주';
  } else if (d.potential >= 70 && d.receptivity >= 60) {
    pace = '빠르게 (주 2회, 과당 1회)';
    totalWeeks = '10~14주';
  } else {
    pace = '표준 (주 1~2회, 과당 1~2회)';
    totalWeeks = '20~30주';
  }

  // 주의사항
  const warnings: string[] = [];
  if (d.retention < 40) warnings.push('이탈 위험 높음 — 매 수업 후 관심/안부 연락 필수');
  if (d.stability < 40) warnings.push('내적 불안정 — 상담/돌봄 병행 권장');
  if (d.relationship < 40) warnings.push('인도자 신뢰도 낮음 — 관계 형성에 시간 투자 필요');
  if ((Number(data.cult_risk) || 1) >= 3) warnings.push('이단 경험 — 18과 정통과 이단 반드시 강조');
  const hasMentalIssue = ['우울증 진단', '기타 정신질환', '치매/인지저하'].includes(data.health_mental || '');
  if (hasMentalIssue) warnings.push('정신건강 주의 — 전문 상담 연계 고려');

  const compressedIds = [1, 2, 10, 11, 12, 13, 14, 15, 17, 20];

  return { typeName, typeDesc, typeIcon, lessons, pace, totalWeeks, warnings, compressedIds, dims: d };
}
