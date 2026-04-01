import type { ChecklistData, Dimension, MatchResult, LessonPlan, LessonPriority, LessonPhase, Warning } from './types';
import { CURRICULUM } from './curriculum';

// ─── 유형별 커리큘럼 순서 ───
const TYPE_ORDERS: Record<string, number[]> = {
  spiritual_receptive: [1,2,10,17,20,3,4,5,11,12,13,14,15,6,7,8,9,16,18,19],
  relationship_first:  [1,2,16,13,11,3,4,5,10,12,14,15,6,7,8,9,17,18,19,20],
  logical_explorer:    [1,2,3,4,5,6,7,8,9,10,17,20,11,12,13,14,15,16,18,19],
  care_recovery:       [1,2,13,16,12,11,3,4,5,10,14,15,6,7,8,9,17,18,19,20],
  core_compact:        [1,2,10,11,12,13,14,15,17,20,3,4,5,6,7,8,9,16,18,19],
  growth_accelerator:  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  standard_nurture:    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
};

// 압축형 1차 필수 과 ID
const COMPACT_PHASE1 = [1, 2, 10, 11, 12, 13, 14, 15, 17, 20];

interface TypeInfo {
  key: string;
  name: string;
  icon: string;
  desc: string;
  pace: string;
  weeks: string;
}

function classifyType(d: Record<string, number>): TypeInfo {
  if (d.sensitivity >= 70 && d.receptivity >= 60) return {
    key: 'spiritual_receptive', name: '영적 수용형', icon: '🕊️',
    desc: '영적 감수성이 높고 복음에 열려있습니다. 핵심 교리를 중심으로 빠르게 진행할 수 있습니다.',
    pace: '빠르게 (주 2회, 과당 1회)', weeks: '10~14주',
  };
  if (d.receptivity < 40) return {
    key: 'relationship_first', name: '관계 형성 우선형', icon: '🤝',
    desc: '아직 마음이 열리지 않은 상태입니다. 관계 형성과 동기부여에 충분한 시간이 필요합니다.',
    pace: '느리게 (주 1회, 과당 2~3회 반복)', weeks: '40~50주',
  };
  if (d.sensitivity < 40 && d.receptivity >= 40) return {
    key: 'logical_explorer', name: '논리적 탐구형', icon: '🔍',
    desc: '영적 감수성은 낮지만 관심은 있습니��. 역사적·논리적 접근이 효과적입니다.',
    pace: '표준 (주 1~2회, 과당 1~2회)', weeks: '20~30주',
  };
  if (d.stability < 40) return {
    key: 'care_recovery', name: '돌봄 회복형', icon: '💛',
    desc: '내적 불안정 요소가 있습니다. 기도·위로·돌봄 중심으로 안정을 먼저 확보해야 합니다.',
    pace: '느리게 (주 1회, 과당 2회)', weeks: '35~45주',
  };
  if (d.retention < 40) return {
    key: 'core_compact', name: '핵심 압축형', icon: '⚡',
    desc: '이탈 위험이 높습니다. 핵심 과정만 압축하여 빠르게 은혜를 경험하게 해야 합니다.',
    pace: '집중 (주 2회, 과당 1회)', weeks: '1차 5~7주 / 2차 10~15주',
  };
  if (d.potential >= 70) return {
    key: 'growth_accelerator', name: '성장 가속형', icon: '🚀',
    desc: '성장 잠재력이 높습니다. 표준 속도보다 빠르게 진행하며 심화 질문을 활용하세요.',
    pace: '빠르게 (주 2회, 과당 1회)', weeks: '10~14주',
  };
  return {
    key: 'standard_nurture', name: '표준 양육형', icon: '📖',
    desc: '전반적으로 균형 잡힌 상태입니다. 표준 커리큘럼 순서대로 진행하면 됩니다.',
    pace: '표준 (주 1~2회, 과당 1~2회)', weeks: '20~30주',
  };
}

// ─── 오버라이드: 배열에서 id를 target 위치로 이동 ───
function moveLesson(order: number[], lessonId: number, position: { after?: number; index?: number }) {
  const idx = order.indexOf(lessonId);
  if (idx === -1) return;
  order.splice(idx, 1);

  if (position.after !== undefined) {
    const targetIdx = order.indexOf(position.after);
    if (targetIdx !== -1) {
      order.splice(targetIdx + 1, 0, lessonId);
    } else {
      order.push(lessonId);
    }
  } else if (position.index !== undefined) {
    order.splice(position.index, 0, lessonId);
  }
}

function applyOverrides(order: number[], data: ChecklistData) {
  // 규칙 1: 이단 경험자 → 18과를 10과 직후로
  if ((Number(data.cult_risk) || 1) >= 3) {
    moveLesson(order, 18, { after: 10 });
  }

  // 규칙 2: 정신건강 심각 → 13과를 3번째로 (index 2)
  const severeMental = ['우울증 진단', '기타 정신질환', '치매/인지저하'];
  if (severeMental.includes(data.health_mental || '')) {
    moveLesson(order, 13, { index: 2 });
  }

  // 규칙 3: 가족 반대 → 19과를 신앙성장 구간(11~16) 마지막 직후로
  if (data.family_faith === '가족 반대') {
    const growthLessons = [11, 12, 13, 14, 15, 16];
    let lastGrowthIdx = -1;
    for (const gl of growthLessons) {
      const idx = order.indexOf(gl);
      if (idx > lastGrowthIdx) lastGrowthIdx = idx;
    }
    if (lastGrowthIdx !== -1) {
      const lesson19Idx = order.indexOf(19);
      if (lesson19Idx !== -1 && lesson19Idx > lastGrowthIdx + 1) {
        moveLesson(order, 19, { index: lastGrowthIdx + 1 });
      }
    }
  }
}

// ─── 태그 부여 ───
function assignTags(
  lessonId: number,
  d: Record<string, number>,
  data: ChecklistData,
  typeKey: string,
): { priority: LessonPriority; note: string; repeat: number } {
  let priority: LessonPriority = 'normal';
  let note = '';
  let repeat = 1;

  // 핵심교리(10, 17, 20): 모든 유형에서 필수
  if ([10, 17, 20].includes(lessonId)) {
    priority = 'essential';
    if (d.sensitivity >= 60) note = '영적 감수성 높음 — 깊이 다루기';
    else note = '핵심 과정, 반드시 이수';
  }

  // 입문(1-2)
  if (lessonId <= 2) {
    if (d.receptivity < 40) { priority = 'essential'; repeat = 2; note = '충분히 반복, 관계 형성 병행'; }
    else if (d.receptivity >= 70) { note = '빠르게 진행 가능'; }
    else { priority = 'essential'; note = '기초 다지기'; }
  }

  // 감수성 < 40: 6~9과 강조
  if (lessonId >= 6 && lessonId <= 9 && d.sensitivity < 40) {
    priority = 'emphasis';
    note = '이 영역이 핵심 설득 포인트 — 질문 유도';
  }

  // 안정성 < 50: 13과 강조+반복, 16과 강조
  if (lessonId === 13 && d.stability < 50) {
    priority = 'emphasis'; repeat = 2;
    note = '기도를 통한 내적 안정 우선';
  }
  if (lessonId === 16 && d.stability < 50) {
    priority = 'emphasis';
    note = '위로와 회복의 메시지 강조';
  }

  // 잠재력 >= 70: 11과 강조
  if (lessonId === 11 && d.potential >= 70) {
    priority = 'emphasis';
    note = '자기 점검 — 어떤 밭인지 깊이 성찰';
  }

  // 이단경계 >= 3: 18과 필수+반복
  if (lessonId === 18 && (Number(data.cult_risk) || 1) >= 3) {
    priority = 'essential'; repeat = 2;
    note = '이단 경험 있음 — 반드시 강조';
  }

  // 영적성숙(19): 유지안정 낮으면 강조
  if (lessonId === 19) {
    if (d.retention < 40) { priority = 'emphasis'; note = '핍박 속 인내의 메시지로 이탈 방지'; }
    else if (data.family_faith === '가족 반대') { priority = 'emphasis'; note = '가족 반대 환경 — 심리적 지지 강화'; }
    else if (d.stability < 70) { priority = 'optional'; note = '안정 후 진행'; }
  }

  // 성장 가속형: 심화 질문 노트
  if (typeKey === 'growth_accelerator' && !note) {
    note = '심화 질문 활용, 빠르게 진행';
  }

  return { priority, note, repeat };
}

// ─── 메인 매칭 함수 ───
export function generateMatching(dims: Dimension[], data: ChecklistData): MatchResult {
  const d: Record<string, number> = {};
  dims.forEach(dm => { d[dm.key] = dm.score; });

  const typeInfo = classifyType(d);

  // 유형별 순서 가져오기 + 오버라이드 적용
  const order = [...TYPE_ORDERS[typeInfo.key]];
  applyOverrides(order, data);

  // 순서대로 LessonPlan 생성
  const lessonMap = new Map(CURRICULUM.map(c => [c.id, c]));
  const isCompact = typeInfo.key === 'core_compact';

  const lessons: LessonPlan[] = order.map(id => {
    const lesson = lessonMap.get(id)!;
    const tags = assignTags(id, d, data, typeInfo.key);
    const phase: LessonPhase = isCompact && !COMPACT_PHASE1.includes(id) ? 2 : 1;

    return { ...lesson, ...tags, phase };
  });

  // 주의사항 (🔴 critical / 🟠 caution / ⚠️ note)
  const warnings: Warning[] = [];
  const riskFactors = data.risk_factors || [];
  const personality = data.personality || [];
  const severeMental = ['우울증 진단', '기타 정신질환', '치매/인지저하'];
  const EXTERNAL_HIGH = ['주변에 반대하는 사람 있음', '이미 부정적 정보 접한 적 있음', '적극적으로 검증하려는 성향'];

  // ── 🔴 탈락 키워드 경고 (critical) ──
  if (['특별한 목적 없음', '지인 따라서'].includes(data.motivation || ''))
    warnings.push({ level: 'critical', message: '수강 동기 불명확 — 첫 상담에서 "왜 듣고 싶은지" 반드시 확인. 동기 없이 시작하면 탈락률 80%+' });

  if (['우선 들어보겠다 수준', '확답 없이 시작'].includes(data.commitment || ''))
    warnings.push({ level: 'critical', message: '기간 미확답 — 최소 수강 기간을 명확히 합의하지 않으면 중도 이탈 확률 매우 높음' });

  if (data.commitment === '외부 일정(군대/취업 등)과 충돌 가능')
    warnings.push({ level: 'critical', message: '외부 일정 충돌 — 군대/취업/학업 등 확정 일정 먼저 확인. 불확실 시 핵심 압축코스 검토' });

  if (EXTERNAL_HIGH.includes(data.external_info || ''))
    warnings.push({ level: 'critical', message: '외부 부정정보 접촉 위험 — 비방 영상/이단 상담소 접촉 시 즉시 이탈 패턴. 올바른 정보 프레임 사전 제공' });

  // ── 🟠 주의 경고 (caution) ──
  if (riskFactors.includes('부모/가족 간섭·통제'))
    warnings.push({ level: 'caution', message: '가족 간섭 위험 — 부모가 다른 일정을 갑자기 부여하면 수강 포기 패턴. 가족 동의 여부 사전 확인' });

  if (riskFactors.includes('시간 부족') && riskFactors.includes('경제적 부담'))
    warnings.push({ level: 'caution', message: '세상가시 복합 — 시간+경제 이중 부담. 핵심 압축코스 강력 권장' });

  if (personality.includes('고집 있음') && (Number(data.openness) || 3) <= 2)
    warnings.push({ level: 'caution', message: '자기성찰 회피 — 분석적 접근보다 경험적 접근 필요' });

  // ── ⚠️ 기존 경고 (note) ──
  if (d.retention < 40) warnings.push({ level: 'note', message: '이탈 위험 높음 — 매 수업 후 관심/안부 연락 필수' });
  if (d.stability < 40) warnings.push({ level: 'note', message: '내적 불안정 — 상담/돌봄 병행 권장' });
  if (d.relationship < 40) warnings.push({ level: 'note', message: '인도자 신뢰도 낮음 — 관계 형성에 시간 투자 필요' });
  if ((Number(data.cult_risk) || 1) >= 3) warnings.push({ level: 'note', message: '이단 경험 — 18과 정통과 이단 반드시 강조' });
  if (severeMental.includes(data.health_mental || '')) warnings.push({ level: 'note', message: '정신건강 주의 — 전문 상담 연계 고려' });
  if (data.family_faith === '가족 반대') warnings.push({ level: 'note', message: '가족 반대 환경 — 19과(핍박) 과정에서 심리적 지지 강화' });

  return {
    typeName: typeInfo.name,
    typeDesc: typeInfo.desc,
    typeIcon: typeInfo.icon,
    lessons,
    pace: typeInfo.pace,
    totalWeeks: typeInfo.weeks,
    warnings,
    compressedIds: COMPACT_PHASE1,
    dims: d,
  };
}
