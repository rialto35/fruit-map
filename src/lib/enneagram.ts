export interface EnneagramType {
  number: number;
  name: string;
  icon: string;
  spiritual_blocker: string;
  growth_direction: string;
  curriculum_note: string;
  shadow: string;
}

const ENNEAGRAM_DATA: Record<string, EnneagramType> = {
  '1': { number: 1, name: '개혁가', icon: '⚖️', spiritual_blocker: '완벽주의 — "올바르지 않으면 의미 없다"는 경직성이 은혜를 막음', growth_direction: '분노→평화로. 불완전함을 수용하는 훈련이 핵심', curriculum_note: '11과(네 가지 밭) — 완벽한 밭은 없다는 메시지에 집중', shadow: '자기비판, 타인 판단, 융통성 부족' },
  '2': { number: 2, name: '조력자', icon: '🤝', spiritual_blocker: '자기 희생 중독 — 도움을 주면서 정작 자신의 필요를 무시', growth_direction: '자기돌봄 먼저. "받는 것도 은혜"를 경험하게 하기', curriculum_note: '13과(기도) — 자신을 위한 기도를 먼저 경험하게', shadow: '숨겨진 분노, 조종 욕구, 거절에 대한 두려움' },
  '3': { number: 3, name: '성취자', icon: '🏆', spiritual_blocker: '이미지 집착 — 겉으로 잘 보이는 것이 진짜 성장을 가림', growth_direction: '성과→진정성으로. 있는 그대로의 가치를 발견하기', curriculum_note: '14~15과(신앙의 3요소) — 행위가 아닌 본질적 가치에 집중', shadow: '내면 공허, 자기기만, 실패 공포' },
  '4': { number: 4, name: '예술가', icon: '🎨', spiritual_blocker: '감정 과몰입 — 감정이 전부라고 느끼며 객관적 진리에 저항', growth_direction: '감정→안정으로. 감정과 진리의 균형을 찾기', curriculum_note: '16과(복 있는 사람) — 감정을 넘어선 객관적 축복에 집중', shadow: '질투, 우울, 자기연민, "나는 특별해야 한다"' },
  '5': { number: 5, name: '탐구가', icon: '🔬', spiritual_blocker: '지식 저장만 하고 체험 회피 — 머리→가슴 전환이 가장 어려운 유형', growth_direction: '관찰→참여로. 안전한 환경에서 체험적 영성 유도', curriculum_note: '13과(기도) — 분석이 아닌 실제 기도 체험으로 전환 유도', shadow: '감정 차단, 관계 회피, 에너지 고갈 공포' },
  '6': { number: 6, name: '충실가', icon: '🛡️', spiritual_blocker: '불신과 의심 — 권위에 대한 양가감정이 신뢰 형성을 방해', growth_direction: '의심→신뢰로. 작은 신뢰 경험을 쌓아 안전감 형성', curriculum_note: '6과(예언과 성취) — 검증 가능한 사실로 신뢰의 기반 제공', shadow: '과잉 걱정, 최악 시나리오 집착, 권위 반항/의존' },
  '7': { number: 7, name: '열정가', icon: '🎉', spiritual_blocker: '고통 회피 — 깊이 들어가야 할 때 표면으로 도망치는 패턴', growth_direction: '분산→집중으로. 하나에 깊이 머무는 훈련', curriculum_note: '12과(거듭남) — 성장에는 고통의 과정이 필요하다는 메시지', shadow: '깊이 부족, 약속 불이행, 고통 앞에서 회피' },
  '8': { number: 8, name: '도전가', icon: '💪', spiritual_blocker: '통제 욕구 — 맡기는 것을 약함으로 인식하여 저항', growth_direction: '통제→순복으로. 강함 속의 부드러움을 발견하기', curriculum_note: '10과(예수님이 구원자이신 이유) — 강한 자도 도움이 필요하다는 메시지', shadow: '취약함 거부, 과도한 지배, 분노 아래의 상처' },
  '9': { number: 9, name: '평화주의자', icon: '☮️', spiritual_blocker: '갈등 회피 — 편안함을 위해 중요한 결단을 미루는 패턴', growth_direction: '수동→능동으로. 자신의 의견과 욕구를 표현하는 훈련', curriculum_note: '17과(초림과 재림) — 결단이 필요한 순간이 있다는 메시지', shadow: '자기 무시, 분노 억압, 변화 저항' },
};

export function getEnneagramInsight(enneagram: string | undefined): EnneagramType | null {
  if (!enneagram || enneagram === '모름') return null;
  return ENNEAGRAM_DATA[enneagram] || null;
}
