// ─── Checklist Data (폼 입력값) ───
export interface ChecklistData {
  // Step 1: 기본 정보
  name?: string;
  age?: string;
  gender?: string;
  guide_name?: string;
  guide_relation?: string;
  openness?: string; // "1"~"5"
  marital?: string;
  children?: string;
  family_faith?: string;
  mbti?: string; // 16 MBTI types or "모름"

  // Step 2: 배경 파악
  religion_bg?: string;
  religion_years?: string;
  growth_env?: string;
  economic?: string;

  // Step 3: 내면 탐색
  concerns?: string[];
  risk_factors?: string[];
  interests?: string[];

  // Step 4: 영적 상태
  cult_risk?: string; // "1"~"5"
  believe_god?: string;
  believe_spirit?: string;
  believe_soul?: string; // "1"~"5"
  bible_interest?: string; // "1"~"5"

  // Step 5: 종합 평가
  personality?: string[];
  health_physical?: string;
  health_mental?: string;
  available_day?: string;
  available_time?: string;
  location?: string;
  trust_level?: string; // "1"~"5"
  testimony?: string;
}

// ─── 6차원 분석 ───
export interface Dimension {
  key: string;
  name: string;
  score: number;
  icon: string;
  color: string;
  level: string;
}

// ─── 커리큘럼 ───
export type LessonCategory = '입문' | '성경이해' | '역사맥락' | '핵심교리' | '신앙성장' | '영적분별' | '영적성숙';

export interface Lesson {
  id: number;
  title: string;
  category: LessonCategory;
  page: number;
}

export type LessonPriority = 'essential' | 'emphasis' | 'normal' | 'optional';
export type LessonPhase = 1 | 2;

export interface LessonPlan extends Lesson {
  priority: LessonPriority;
  note: string;
  repeat: number;
  phase: LessonPhase;
}

// ─── 매칭 결과 ───
export interface MatchResult {
  typeName: string;
  typeDesc: string;
  typeIcon: string;
  lessons: LessonPlan[];
  pace: string;
  totalWeeks: string;
  warnings: string[];
  compressedIds: number[];
  dims: Record<string, number>;
}

// ─── MBTI 교수법 ───
export const MBTI_TYPES = [
  'INFJ', 'INFP', 'INTJ', 'INTP',
  'ISFJ', 'ISFP', 'ISTJ', 'ISTP',
  'ENFJ', 'ENFP', 'ENTJ', 'ENTP',
  'ESFJ', 'ESFP', 'ESTJ', 'ESTP',
] as const;

export type MbtiType = typeof MBTI_TYPES[number];

export interface TeachingAxis {
  type: string;
  title: string;
  description: string;
  tips: string[];
}

export interface TeachingMethod {
  classFormat: TeachingAxis;      // E/I → 수업 형태
  explanationStyle: TeachingAxis; // S/N → 설명 방식
  persuasionApproach: TeachingAxis; // T/F → 설득 포인트
  progressStructure: TeachingAxis;  // J/P → 진행 구조
  summary: string;
}

// ─── 폼 필드 설정 ───
export interface CompositeSubField {
  key: string;
  label?: string;
  placeholder?: string;
  type: 'text' | 'number' | 'select';
  options?: string[];
}

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface FieldConfigBase {
  label: string;
  description?: string;
}

export interface CompositeFieldConfig extends FieldConfigBase {
  type: 'composite';
  fields: CompositeSubField[];
}

export interface SelectFieldConfig extends FieldConfigBase {
  type: 'select';
  key: string;
  options: (string | SelectOption)[];
}

export interface MultiSelectFieldConfig extends FieldConfigBase {
  type: 'multiselect';
  key: string;
  options: string[];
}

export interface TextareaFieldConfig extends FieldConfigBase {
  type: 'textarea';
  key: string;
  placeholder?: string;
}

export type FieldConfig = CompositeFieldConfig | SelectFieldConfig | MultiSelectFieldConfig | TextareaFieldConfig;

export interface StepConfig {
  id: string;
  title: string;
  icon: string;
  fields: number[];
}
