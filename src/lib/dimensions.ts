import type { ChecklistData, Dimension } from './types';

const GOD_MAP: Record<string, number> = {
  '확실히 믿음': 5, '믿고 싶음': 4, '잘 모르겠음': 3, '회의적': 2, '믿지 않음': 1,
};

const SPIRIT_MAP: Record<string, number> = {
  '믿음': 5, '어느정도': 4, '잘 모르겠음': 3, '믿지 않음': 1,
};

const GROWTH_MAP: Record<string, number> = {
  '안정적 성장': 5, '보통': 4, '불안정(이혼/별거)': 2, '결손가정': 2, '학대/방임 경험': 1, '기타 특이사항': 3,
};

const ECO_MAP: Record<string, number> = {
  '안정적': 5, '보통': 4, '어려움': 2, '매우 어려움': 1,
};

const MENTAL_MAP: Record<string, number> = {
  '양호': 5, '경미한 스트레스': 4, '우울 경향': 3, '우울증 진단': 2, '기타 정신질환': 2, '치매/인지저하': 1,
};

const PHYS_MAP: Record<string, number> = {
  '양호': 5, '보통': 4, '관리 필요': 2, '심각': 1,
};

const FAM_MAP: Record<string, number> = {
  '가족 모두 신앙인': 5, '일부 신앙인': 4, '본인만 관심': 3, '가족 반대': 1, '해당없음': 3,
};

export function computeDimensions(data: ChecklistData): Dimension[] {
  const openness = Number(data.openness) || 3;
  const god = GOD_MAP[data.believe_god || ''] || 3;
  const bible = Number(data.bible_interest) || 3;
  const receptivity = Math.round(((openness + god + bible) / 15) * 100);

  const spirit = SPIRIT_MAP[data.believe_spirit || ''] || 3;
  const soul = Number(data.believe_soul) || 3;
  const sensitivity = Math.round(((god + spirit + soul) / 15) * 100);

  const stability = Math.round(((
    (GROWTH_MAP[data.growth_env || ''] || 3) +
    (ECO_MAP[data.economic || ''] || 3) +
    (MENTAL_MAP[data.health_mental || ''] || 3) +
    (PHYS_MAP[data.health_physical || ''] || 3)
  ) / 20) * 100);

  const trust = Number(data.trust_level) || 3;
  const fam = FAM_MAP[data.family_faith || ''] || 3;
  const relStrength = Math.round(((trust + fam + openness) / 15) * 100);

  const risks = (data.risk_factors || []).length;
  const hasNone = (data.risk_factors || []).includes('특별한 위험 없음');
  const riskScore = hasNone ? 90 : Math.max(10, Math.round(100 - (risks * 12)));

  const interests = (data.interests || []).length;
  const potential = Math.min(100, Math.round(((Math.min(interests, 5) * 4 + bible + openness) / 30) * 100));

  return [
    { key: 'receptivity', name: '수용성', score: receptivity, icon: '🚪', color: '#4A90D9', level: receptivity >= 70 ? '열려있음' : receptivity >= 40 ? '보통' : '닫혀있음' },
    { key: 'sensitivity', name: '영적 감수성', score: sensitivity, icon: '✨', color: '#7B61FF', level: sensitivity >= 70 ? '높음' : sensitivity >= 40 ? '보통' : '낮음' },
    { key: 'stability', name: '내적 안정성', score: stability, icon: '🏠', color: '#2EAE6D', level: stability >= 70 ? '안정' : stability >= 40 ? '보통' : '돌봄 필요' },
    { key: 'relationship', name: '관계 강도', score: relStrength, icon: '🤝', color: '#E8913A', level: relStrength >= 70 ? '강함' : relStrength >= 40 ? '보통' : '약함' },
    { key: 'retention', name: '유지 안정성', score: riskScore, icon: '🛡️', color: '#D94A6B', level: riskScore >= 70 ? '안정' : riskScore >= 40 ? '주의' : '고위험' },
    { key: 'potential', name: '성장 잠재력', score: potential, icon: '🌱', color: '#5BBD72', level: potential >= 70 ? '높음' : potential >= 40 ? '보통' : '낮음' },
  ];
}
