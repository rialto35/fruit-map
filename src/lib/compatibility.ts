export interface CompatibilityResult {
  role: string;
  roleName: string;
  fruitMbti: string;
  partnerMbti: string;
  score: number;
  tips: string[];
  caution: string;
}

const AXIS_SYNERGY: Record<string, { same: string; diff: string }> = {
  EI: { same: '에너지 방향이 같아 리듬이 맞음', diff: '에너지 방향이 달라 수업 형태 조율 필요' },
  SN: { same: '정보 수집 방식이 같아 설명이 통함', diff: '정보 처리 방식이 달라 설명 방식 조율 필요' },
  TF: { same: '판단 기준이 같아 공감대 형성 용이', diff: '판단 기준이 달라 설득 포인트 다르게 접근' },
  JP: { same: '생활 리듬이 같아 스케줄 맞추기 쉬움', diff: '생활 리듬이 달라 스케줄 유연하게 조정' },
};

const PAIR_TIPS: Record<string, string> = {
  'E-I': '외향 파트너가 대화를 주도하되, 내향 상대에게 생각할 시간 부여',
  'I-E': '내향 파트너가 열매의 에너지에 맞춰 적극적으로 반응하기',
  'S-N': '감각형은 구체적 사례를, 직관형은 큰 그림을 원함 — 조율 필요',
  'T-F': '사고형 파트너가 감정형 열매에게는 공감을 먼저, 논리는 나중에',
  'F-T': '감정형 파트너가 사고형 열매에게는 논리적 근거를 먼저 제시',
  'J-P': '판단형 파트너가 인식형 열매에게는 유연한 스케줄 허용',
  'P-J': '인식형 파트너가 판단형 열매에게는 명확한 계획 제시',
};

function calcScore(a: string, b: string): number {
  let score = 60;
  for (let i = 0; i < 4; i++) {
    if (a[i] === b[i]) score += 10;
  }
  return score;
}

function getTips(fruit: string, partner: string): string[] {
  const tips: string[] = [];
  const axes = ['EI', 'SN', 'TF', 'JP'];
  for (let i = 0; i < 4; i++) {
    const axis = axes[i];
    if (fruit[i] === partner[i]) {
      tips.push(`${axis}: ${AXIS_SYNERGY[axis].same}`);
    } else {
      tips.push(`${axis}: ${AXIS_SYNERGY[axis].diff}`);
      const pairKey = `${partner[i]}-${fruit[i]}`;
      if (PAIR_TIPS[pairKey]) tips.push(`  → ${PAIR_TIPS[pairKey]}`);
    }
  }
  return tips;
}

function getCaution(fruit: string, partner: string): string {
  const diffs: string[] = [];
  if (fruit[0] !== partner[0]) diffs.push('에너지');
  if (fruit[2] !== partner[2]) diffs.push('판단기준');
  if (diffs.length >= 2) return `${diffs.join('+')} 차이 큼 — 의식적으로 상대 방식에 맞춰주기`;
  if (fruit[1] !== partner[1]) return '설명 방식 차이 — 상대가 원하는 방식으로 소통하기';
  return '큰 주의점 없음 — 자연스럽게 진행';
}

export function getCompatibility(
  fruitMbti: string | undefined,
  guideMbti: string | undefined,
  teacherMbti: string | undefined,
  servantMbti: string | undefined,
): CompatibilityResult[] {
  const results: CompatibilityResult[] = [];
  const valid = (m: string | undefined) => m && m !== '모름' && m.length === 4;

  if (valid(fruitMbti)) {
    const fm = fruitMbti!;
    if (valid(guideMbti)) {
      results.push({
        role: 'guide', roleName: '인도자', fruitMbti: fm, partnerMbti: guideMbti!,
        score: calcScore(fm, guideMbti!), tips: getTips(fm, guideMbti!), caution: getCaution(fm, guideMbti!),
      });
    }
    if (valid(teacherMbti)) {
      results.push({
        role: 'teacher', roleName: '교사', fruitMbti: fm, partnerMbti: teacherMbti!,
        score: calcScore(fm, teacherMbti!), tips: getTips(fm, teacherMbti!), caution: getCaution(fm, teacherMbti!),
      });
    }
    if (valid(servantMbti)) {
      results.push({
        role: 'servant', roleName: '섬김이', fruitMbti: fm, partnerMbti: servantMbti!,
        score: calcScore(fm, servantMbti!), tips: getTips(fm, servantMbti!), caution: getCaution(fm, servantMbti!),
      });
    }
  }
  return results;
}
