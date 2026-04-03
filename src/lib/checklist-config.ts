import type { StepConfig, FieldConfig } from './types';
import { MBTI_TYPES } from './types';

export const STEPS: StepConfig[] = [
  { id: 'basic', title: '기본 정보', icon: '👤', fields: [1, 2, 20, 3, 4, 19, 26, 23, 24, 25] },
  { id: 'background', title: '배경 파악', icon: '📋', fields: [5, 6] },
  { id: 'inner', title: '내면 탐색', icon: '🌱', fields: [7, 8, 9] },
  { id: 'spiritual', title: '영적 상태', icon: '✝️', fields: [10, 21, 11, 12, 13] },
  { id: 'assess', title: '종합 평가', icon: '📊', fields: [14, 15, 16, 22, 17, 18] },
];

export const FIELD_CONFIG: Record<number, FieldConfig> = {
  1: {
    label: '이름 / 나이 / 성별',
    type: 'composite',
    fields: [
      { key: 'name', placeholder: '이름', type: 'text' },
      { key: 'age', placeholder: '나이', type: 'number' },
      { key: 'gender', type: 'select', options: ['남성', '여성'] },
    ],
  },
  2: {
    label: '인도자 (관계)',
    type: 'composite',
    fields: [
      { key: 'guide_name', placeholder: '인도자 이름', type: 'text' },
      { key: 'guide_relation', type: 'select', options: ['가족', '친구', '직장동료', '교회지인', '이웃', '기타'] },
    ],
  },
  3: {
    label: '오픈 여부 / 인식',
    type: 'select',
    key: 'openness',
    options: [
      { value: 5, label: '매우 열려있음 — 적극적으로 알고 싶어함' },
      { value: 4, label: '열려있음 — 거부감 없이 수용적' },
      { value: 3, label: '보통 — 관심은 있으나 조심스러움' },
      { value: 2, label: '소극적 — 의무감/관계 때문에 참여' },
      { value: 1, label: '닫혀있음 — 거부감 있음' },
    ],
  },
  4: {
    label: '가족사항 / 결혼유무',
    type: 'composite',
    fields: [
      { key: 'marital', type: 'select', options: ['미혼', '기혼', '이혼', '사별', '기타'] },
      { key: 'children', type: 'select', options: ['자녀 없음', '자녀 1명', '자녀 2명', '자녀 3명 이상'] },
      { key: 'family_faith', type: 'select', options: ['가족 모두 신앙인', '일부 신앙인', '본인만 관심', '가족 반대', '해당없음'] },
    ],
  },
  5: {
    label: '종교 / 년수',
    type: 'composite',
    fields: [
      { key: 'religion_bg', type: 'select', options: ['무교', '기독교(현재)', '기독교(과거)', '천주교', '불교', '기타 종교'] },
      { key: 'religion_years', type: 'select', options: ['없음', '1년 미만', '1~3년', '3~5년', '5~10년', '10년 이상'] },
    ],
  },
  6: {
    label: '성장과정 / 경제상황',
    type: 'composite',
    fields: [
      { key: 'growth_env', type: 'select', options: ['안정적 성장', '보통', '불안정(이혼/별거)', '결손가정', '학대/방임 경험', '기타 특이사항'] },
      { key: 'economic', type: 'select', options: ['안정적', '보통', '어려움', '매우 어려움'] },
    ],
  },
  7: {
    label: '🌱 싹 (고민)',
    description: '현재 가장 큰 고민/필요 (복수 선택)',
    type: 'multiselect',
    key: 'concerns',
    options: [
      '건강 문제', '가정/가족 갈등', '경제적 어려움', '직장/진로 고민',
      '대인관계 어려움', '외로움/고독', '불안/두려움', '삶의 의미/방향',
      '자녀 교육', '부부 관계', '중독', '상실/슬픔',
      '분노/감정조절', '자존감 부족', '영적 갈증', '기타',
    ],
  },
  8: {
    label: '⚠️ 침요소 (이탈 위험)',
    description: '중단/이탈 가능 요인 (복수 선택)',
    type: 'multiselect',
    key: 'risk_factors',
    options: [
      '시간 부족', '가족 반대', '건강 악화', '경제적 부담',
      '교회 내 갈등', '교리 거부감', '과거 상처(교회)', '이사/이동',
      '의지 부족', '주변 부정적 영향', '이단 접촉 가능성',
      '부모/가족 간섭·통제', '특별한 위험 없음',
    ],
  },
  9: {
    label: '💡 관심사 (특화)',
    description: '관심 주제/방식 (복수 선택)',
    type: 'multiselect',
    key: 'interests',
    options: [
      '성경공부', '찬양/음악', '기도/묵상', '봉사/섬김',
      '교제/소그룹', '자녀교육', '부부관계', '리더십',
      '치유/회복', '전도/선교', '신학/교리', '문화/예술',
      '재정/스튜어드십', '상담/돌봄',
      '인간관계', '인생2막', '재테크', '자기개발', '진로', '연애',
      '여행', '쇼핑', '취미', '운동', '동아리',
    ],
  },
  10: {
    label: '이단 경계 파악',
    type: 'select',
    key: 'cult_risk',
    options: [
      { value: 1, label: '접촉 경험 없음, 위험 낮음' },
      { value: 2, label: '이단에 대해 들어본 적 있음' },
      { value: 3, label: '이단 교육을 받은 적 있음' },
      { value: 4, label: '현재 이단 교리에 영향받고 있음' },
      { value: 5, label: '이단 소속 경험 있음 (탈퇴)' },
    ],
  },
  11: {
    label: '신심 (영적 믿음)',
    type: 'composite',
    fields: [
      { key: 'believe_god', label: '하나님을 믿는가?', type: 'select', options: ['확실히 믿음', '믿고 싶음', '잘 모르겠음', '회의적', '믿지 않음'] },
      { key: 'believe_spirit', label: '귀신/영적 존재를 믿는가?', type: 'select', options: ['믿음', '어느정도', '잘 모르겠음', '믿지 않음'] },
    ],
  },
  12: {
    label: '영혼의 존재',
    type: 'select',
    key: 'believe_soul',
    options: [
      { value: 5, label: '확실히 있다고 믿음' },
      { value: 4, label: '있을 것 같다' },
      { value: 3, label: '잘 모르겠다' },
      { value: 2, label: '없을 것 같다' },
      { value: 1, label: '없다고 생각함' },
    ],
  },
  13: {
    label: '성경에 대한 관심',
    type: 'select',
    key: 'bible_interest',
    options: [
      { value: 5, label: '매우 높음 — 스스로 읽고 공부함' },
      { value: 4, label: '높음 — 배우고 싶어함' },
      { value: 3, label: '보통 — 관심은 있으나 시작 못함' },
      { value: 2, label: '낮음 — 별로 관심 없음' },
      { value: 1, label: '없음 — 거부감 있음' },
    ],
  },
  14: {
    label: '인성 파악',
    type: 'multiselect',
    key: 'personality',
    options: [
      '온화함', '적극적', '내성적', '외향적', '감성적', '이성적', '리더형', '따르는 형',
      '꼼꼼함', '자유로움', '고집 있음', '유연함', '예민함', '둔감함', '긍정적', '부정적',
    ],
  },
  15: {
    label: '건강 상태',
    type: 'composite',
    fields: [
      { key: 'health_physical', label: '신체 건강', type: 'select', options: ['양호', '보통', '관리 필요', '심각'] },
      { key: 'health_mental', label: '정신 건강', type: 'select', options: ['양호', '경미한 스트레스', '우울 경향', '우울증 진단', '기타 정신질환', '치매/인지저하'] },
    ],
  },
  16: {
    label: '환경 / 수업시간',
    type: 'composite',
    fields: [
      { key: 'available_day', label: '가능한 요일', type: 'select', options: ['평일', '주말', '모두 가능', '불규칙'] },
      { key: 'available_time', label: '시간대', type: 'select', options: ['오전', '오후', '저녁', '유동적'] },
      { key: 'location', label: '수업 장소', type: 'select', options: ['교회', '가정방문', '카페 등 외부', '온라인', '유동적'] },
    ],
  },
  17: {
    label: '천사(인도자) 신뢰도',
    description: '열매가 인도자를 얼마나 신뢰하는지',
    type: 'select',
    key: 'trust_level',
    options: [
      { value: 5, label: '매우 높음 — 전적으로 신뢰' },
      { value: 4, label: '높음 — 편안하게 대화 가능' },
      { value: 3, label: '보통 — 기본적 신뢰' },
      { value: 2, label: '낮음 — 아직 어색함' },
      { value: 1, label: '매우 낮음 — 경계하는 상태' },
    ],
  },
  18: {
    label: '간증 (인도자 소견)',
    type: 'textarea',
    key: 'testimony',
    placeholder: '열매에 대한 종합 소견, 특이사항을 자유롭게 작성하세요...',
  },
  19: {
    label: 'MBTI (선택)',
    description: '열매의 MBTI 유형 (모르면 "모름" 선택)',
    type: 'select',
    key: 'mbti',
    options: [
      { value: '모름', label: '모름 / 미입력' },
      ...MBTI_TYPES.map(t => ({ value: t, label: t })),
    ],
  },
  20: {
    label: '수강 동기 / 목적',
    description: '복음방에 참여하게 된 이유',
    type: 'select',
    key: 'motivation',
    options: [
      { value: '본인 의지로 관심', label: '본인 의지로 관심' },
      { value: '인도자 권유로', label: '인도자 권유로' },
      { value: '지인 따라서', label: '지인 따라서' },
      { value: '특별한 목적 없음', label: '특별한 목적 없음' },
      { value: '기타', label: '기타' },
    ],
  },
  21: {
    label: '외부 비방/부정정보 접촉',
    description: '외부에서 부정적 정보를 접할 가능성',
    type: 'select',
    key: 'external_info',
    options: [
      { value: '가능성 없음', label: '가능성 없음' },
      { value: '인터넷 검색 가능성 있음', label: '인터넷 검색 가능성 있음' },
      { value: '주변에 반대하는 사람 있음', label: '주변에 반대하는 사람 있음' },
      { value: '이미 부정적 정보 접한 적 있음', label: '이미 부정적 정보 접한 적 있음' },
      { value: '적극적으로 검증하려는 성향', label: '적극적으로 검증하려는 성향' },
    ],
  },
  22: {
    label: '기간 확답 여부',
    description: '수강 기간에 대한 합의 정도',
    type: 'select',
    key: 'commitment',
    options: [
      { value: '명확하게 확답함 (N개월 이상)', label: '명확하게 확답함 (N개월 이상)' },
      { value: '대략적으로 동의함', label: '대략적으로 동의함' },
      { value: '우선 들어보겠다 수준', label: '우선 들어보겠다 수준' },
      { value: '확답 없이 시작', label: '확답 없이 시작' },
      { value: '외부 일정(군대/취업 등)과 충돌 가능', label: '외부 일정(군대/취업 등)과 충돌 가능' },
    ],
  },
  23: {
    label: '인도자 MBTI',
    description: '인도자(천사)의 MBTI',
    type: 'select',
    key: 'guide_mbti',
    options: [
      { value: '모름', label: '모름 / 미입력' },
      ...MBTI_TYPES.map(t => ({ value: t, label: t })),
    ],
  },
  24: {
    label: '교사 MBTI (선택)',
    description: '담당 교사의 MBTI (있는 경우)',
    type: 'select',
    key: 'teacher_mbti',
    options: [
      { value: '모름', label: '모름 / 미입력 / 해당없음' },
      ...MBTI_TYPES.map(t => ({ value: t, label: t })),
    ],
  },
  25: {
    label: '섬김이 MBTI (선택)',
    description: '담당 섬김이의 MBTI (있는 경우)',
    type: 'select',
    key: 'servant_mbti',
    options: [
      { value: '모름', label: '모름 / 미입력 / 해당없음' },
      ...MBTI_TYPES.map(t => ({ value: t, label: t })),
    ],
  },
  26: {
    label: '에니어그램 (선택)',
    description: '열매의 에니어그램 유형 (모르면 "모름" 선택)',
    type: 'select',
    key: 'enneagram',
    options: [
      { value: '모름', label: '모름 / 미입력' },
      { value: '1', label: '1번 — 개혁가' },
      { value: '2', label: '2번 — 조력자' },
      { value: '3', label: '3번 — 성취자' },
      { value: '4', label: '4번 — 예술가' },
      { value: '5', label: '5번 — 탐구가' },
      { value: '6', label: '6번 — 충실가' },
      { value: '7', label: '7번 — 열정가' },
      { value: '8', label: '8번 — 도전가' },
      { value: '9', label: '9번 — 평화주의자' },
    ],
  },
};
