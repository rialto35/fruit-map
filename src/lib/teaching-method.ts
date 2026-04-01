import type { TeachingMethod, TeachingAxis } from './types';

const CLASS_FORMAT: Record<'E' | 'I', TeachingAxis> = {
  E: {
    type: 'E',
    title: '소그룹 참여형',
    description: '외향적 성향으로 함께하는 환경에서 에너지를 얻습니다.',
    tips: [
      '소그룹 토론 형식으로 진행',
      '함께 성경 읽기, 질의응답 활발히',
      '교제 시간 병행 (식사, 차 등)',
      '다른 열매와 함께 수업 가능',
    ],
  },
  I: {
    type: 'I',
    title: '1:1 집중형',
    description: '내향적 성향으로 조용한 환경에서 깊이 생각합니다.',
    tips: [
      '1:1 수업이 가장 효과적',
      '묵상·사색 시간 충분히 부여',
      '조용한 장소 선택',
      '생각을 정리할 시간 필요 — 즉답 강요 금지',
    ],
  },
};

const EXPLANATION_STYLE: Record<'S' | 'N', TeachingAxis> = {
  S: {
    type: 'S',
    title: '구체적 사례형',
    description: '감각적 성향으로 구체적이고 실제적인 정보를 선호합니다.',
    tips: [
      '구체적 역사·사건·인물 사례 활용',
      '시각자료 (그림, 도표, 지도) 적극 사용',
      '단계별·순차적 설명',
      '실생활 적용 사례 제시',
    ],
  },
  N: {
    type: 'N',
    title: '의미·패턴 연결형',
    description: '직관적 성향으로 큰 그림과 의미를 먼저 파악하려 합니다.',
    tips: [
      '전체 큰 그림을 먼저 제시한 뒤 세부로',
      '상징·비유 중심 설명',
      '과와 과 사이 의미·패턴 연결',
      '스스로 질문하도록 유도',
    ],
  },
};

const PERSUASION_APPROACH: Record<'T' | 'F', TeachingAxis> = {
  T: {
    type: 'T',
    title: '논리적 근거형',
    description: '사고형 성향으로 논리와 근거를 중시합니다.',
    tips: [
      '예언과 성취의 정확성 강조',
      '역사적·고고학적 증거 제시',
      'Q&A 중심 — 질문을 환영하고 논리적으로 답변',
      '감정 호소보다 사실과 논증 우선',
    ],
  },
  F: {
    type: 'F',
    title: '공감·체험형',
    description: '감정형 성향으로 관계와 감동을 중시합니다.',
    tips: [
      '간증·체험 사례 공유',
      '감동적 스토리 활용',
      '공감 표현 — "정말 그러셨군요"',
      '인도자 자신의 신앙 여정 나눔',
    ],
  },
};

const PROGRESS_STRUCTURE: Record<'J' | 'P', TeachingAxis> = {
  J: {
    type: 'J',
    title: '체계적 진행형',
    description: '판단형 성향으로 계획과 구조를 선호합니다.',
    tips: [
      '정해진 스케줄 엄수 (시간, 장소 고정)',
      '진도표를 미리 공유',
      '예습/복습 과제 부여',
      '매 수업 목표와 요약 제시',
    ],
  },
  P: {
    type: 'P',
    title: '유연한 진행형',
    description: '인식형 성향으로 유연함과 자유를 선호합니다.',
    tips: [
      '열매 흥미에 따라 순서 조정 가능',
      '자유 토론 시간 확보',
      '과도한 과제 부담 금지',
      '진행 속도를 열매 반응에 맞춰 조절',
    ],
  },
};

export function getTeachingMethod(mbti: string | undefined): TeachingMethod | null {
  if (!mbti || mbti === '모름' || mbti.length !== 4) return null;

  const [ei, sn, tf, jp] = mbti.split('') as [string, string, string, string];

  const classFormat = CLASS_FORMAT[ei as 'E' | 'I'] || CLASS_FORMAT.I;
  const explanationStyle = EXPLANATION_STYLE[sn as 'S' | 'N'] || EXPLANATION_STYLE.S;
  const persuasionApproach = PERSUASION_APPROACH[tf as 'T' | 'F'] || PERSUASION_APPROACH.T;
  const progressStructure = PROGRESS_STRUCTURE[jp as 'J' | 'P'] || PROGRESS_STRUCTURE.J;

  const summary = `${classFormat.title} + ${explanationStyle.title} + ${persuasionApproach.title} + ${progressStructure.title}`;

  return { classFormat, explanationStyle, persuasionApproach, progressStructure, summary };
}
