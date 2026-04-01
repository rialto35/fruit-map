import type { Lesson, LessonCategory } from './types';

export const CURRICULUM: Lesson[] = [
  { id: 1, title: '종교란 무엇인가', category: '입문', page: 5 },
  { id: 2, title: '성경을 알아야 하는 필요성', category: '입문', page: 11 },
  { id: 3, title: '성경은 어떤 책인가(상)', category: '성경이해', page: 17 },
  { id: 4, title: '성경은 어떤 책인가(하)', category: '성경이해', page: 25 },
  { id: 5, title: '구약과 신약은 무엇인가', category: '성경이해', page: 31 },
  { id: 6, title: '예언과 성취에 대해', category: '역사맥락', page: 37 },
  { id: 7, title: '성경 6,000년의 역사', category: '역사맥락', page: 45 },
  { id: 8, title: '아담 세계와 노아 세계', category: '역사맥락', page: 51 },
  { id: 9, title: '아브라함과 모세의 육적 이스라엘 세계', category: '역사맥락', page: 57 },
  { id: 10, title: '예수님이 구원자이신 이유', category: '핵심교리', page: 65 },
  { id: 11, title: '네 가지 밭', category: '신앙성장', page: 71 },
  { id: 12, title: '거듭남과 성장 과정과 인내의 믿음', category: '신앙성장', page: 77 },
  { id: 13, title: '응답받는 기도의 방법', category: '신앙성장', page: 83 },
  { id: 14, title: '신앙의 3요소(1)', category: '신앙성장', page: 89 },
  { id: 15, title: '신앙의 3요소(2)', category: '신앙성장', page: 95 },
  { id: 16, title: '복 있는 사람(시 1편)', category: '신앙성장', page: 101 },
  { id: 17, title: '초림과 재림의 이유', category: '핵심교리', page: 107 },
  { id: 18, title: '정통과 이단', category: '영적분별', page: 115 },
  { id: 19, title: '핍박받는 자가 받을 복', category: '영적성숙', page: 121 },
  { id: 20, title: '세상 끝과 재창조에 대해', category: '핵심교리', page: 127 },
];

export const CAT_COLORS: Record<LessonCategory, string> = {
  '입문': '#E8913A',
  '성경이해': '#4A90D9',
  '역사맥락': '#2EAE6D',
  '핵심교리': '#7B61FF',
  '신앙성장': '#5BBD72',
  '영적분별': '#D94A6B',
  '영적성숙': '#8B6FC0',
};

export const CAT_ICONS: Record<LessonCategory, string> = {
  '입문': '🚪',
  '성경이해': '📖',
  '역사맥락': '🏛️',
  '핵심교리': '✝️',
  '신앙성장': '🌱',
  '영적분별': '🛡️',
  '영적성숙': '👑',
};
