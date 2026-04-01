export interface CrossPattern {
  id: string;
  name: string;
  icon: string;
  insight: string;
  action: string;
}

interface DimScores {
  receptivity: number;
  sensitivity: number;
  stability: number;
  relationship: number;
  retention: number;
  potential: number;
}

interface PatternDef extends CrossPattern {
  condition: (d: DimScores) => boolean;
}

const CROSS_PATTERNS: PatternDef[] = [
  {
    id: 'fast-but-fragile',
    name: '빠른 수용, 약한 뿌리',
    icon: '🌪️',
    condition: (d) => d.receptivity >= 60 && d.stability < 40,
    insight: '복음을 빠르게 받아들이지만 내적 기반이 약해 쉽게 흔들릴 수 있습니다.',
    action: '감동을 주되, 12과(거듭남과 성장)와 14~15과(신앙의 3요소)를 반복하여 뿌리를 단단히 하세요.',
  },
  {
    id: 'spiritual-but-unstable',
    name: '영적 체험형, 지속 어려움',
    icon: '💫',
    condition: (d) => d.sensitivity >= 60 && d.retention < 40,
    insight: '영적 감수성이 높아 은혜를 받지만, 현실적 제약으로 지속이 어렵습니다.',
    action: '영적 체험 직후 소그룹/공동체에 즉시 연결하여 관계적 지지를 확보하세요.',
  },
  {
    id: 'capable-but-distrustful',
    name: '잠재력 높음, 신뢰 부족',
    icon: '🔒',
    condition: (d) => d.potential >= 60 && d.relationship < 40,
    insight: '성장 가능성은 높지만 인도자와의 관계가 아직 형성되지 않았습니다.',
    action: '교육보다 관계 형성이 우선입니다. 인도자 교체도 검토할 수 있습니다.',
  },
  {
    id: 'closed-but-sensitive',
    name: '닫혀있지만 영적으로 민감',
    icon: '🕯️',
    condition: (d) => d.receptivity < 40 && d.sensitivity >= 60,
    insight: '논리적으로는 거부하지만 영적으로는 민감한 상태입니다.',
    action: '교리 설명보다 기도·찬양·간증을 통한 영적 체험으로 먼저 마음을 여세요.',
  },
  {
    id: 'double-risk',
    name: '이중 리스크 (최우선 돌봄)',
    icon: '🚨',
    condition: (d) => d.stability < 40 && d.retention < 40,
    insight: '내적 불안정과 이탈 위험이 동시에 높습니다. 가장 주의가 필요한 상태입니다.',
    action: '교육 진행보다 상담·돌봄이 먼저입니다. 13과(기도)만이라도 함께하며 안정을 확보하세요.',
  },
  {
    id: 'ideal-fruit',
    name: '최적의 열매 (리더 후보)',
    icon: '👑',
    condition: (d) => d.potential >= 70 && d.retention >= 70 && d.receptivity >= 60,
    insight: '성장 잠재력, 지속 가능성, 수용성이 모두 높은 이상적인 상태입니다.',
    action: '빠른 진행 + 심화 질문 + 11과(네 가지 밭) 자기 점검 후, 리더 양성 트랙을 고려하세요.',
  },
  {
    id: 'wounded-healer',
    name: '상처받은 회복자',
    icon: '💔',
    condition: (d) => d.stability < 40 && d.sensitivity >= 60 && d.receptivity >= 50,
    insight: '상처가 있지만 영적으로 열려있습니다. 회복 과정 자체가 강력한 간증이 됩니다.',
    action: '13과(기도)·16과(복)로 회복을 경험하게 하고, 이후 19과(핍박)로 의미를 부여하세요.',
  },
  {
    id: 'head-knowledge',
    name: '머리 신앙, 가슴 부족',
    icon: '🧠',
    condition: (d) => d.receptivity >= 60 && d.sensitivity < 40 && d.potential >= 50,
    insight: '지적으로는 수용하지만 영적 체험이 부족합니다.',
    action: '6~9과 역사적 접근으로 확신을 주되, 13과(기도)에서 체험적 전환을 유도하세요.',
  },
  {
    id: 'lone-believer',
    name: '외로운 신앙인',
    icon: '🏝️',
    condition: (d) => d.receptivity >= 50 && d.relationship < 50 && d.retention < 50,
    insight: '신앙에 관심은 있지만 지지체계가 없어 혼자 고군분투하고 있습니다.',
    action: '인도자 신뢰 구축 + 소그룹 연결이 급선무입니다. 교육과 교제를 반드시 병행하세요.',
  },
];

export function getCrossInsights(dims: Record<string, number>): CrossPattern[] {
  const d: DimScores = {
    receptivity: dims.receptivity ?? 50,
    sensitivity: dims.sensitivity ?? 50,
    stability: dims.stability ?? 50,
    relationship: dims.relationship ?? 50,
    retention: dims.retention ?? 50,
    potential: dims.potential ?? 50,
  };

  return CROSS_PATTERNS
    .filter(p => p.condition(d))
    .map(({ id, name, icon, insight, action }) => ({ id, name, icon, insight, action }));
}
