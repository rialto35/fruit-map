# FruitMap (열매맵)

## 프로젝트 개요
개신교 복음방 인도자가 "열매 체크리스트"(18개 항목 + MBTI)를 입력하면,
6차원 영적 성장 프로파일을 분석하고 20과 커리큘럼 맞춤 로드맵 + 교수법 가이드를 생성하는 웹앱.

## 기술 스택
- Next.js 14 (App Router)
- Tailwind CSS
- Recharts (레이더 차트)
- Vercel 배포
- TypeScript

## 핵심 구조

```
/app
  /page.tsx              → 메인 (체크리스트 입력 폼)
  /result/page.tsx       → 결과 페이지 (프로파일 + 로드맵 + 교수법)
/lib
  /dimensions.ts         → 6차원 점수 계산 로직
  /matching.ts           → 7개 유형 분류 + 커리큘럼 매칭 엔진
  /teaching-method.ts    → MBTI 기반 교수법 매칭 엔진
  /curriculum.ts         → 20과 커리큘럼 데이터
  /types.ts              → 타입 정의
/components
  /form                  → 5단계 위저드 폼 컴포넌트
  /result
    /RadarChart.tsx      → 6차원 레이더 차트
    /RoadMap.tsx         → 커리큘럼 로드맵
    /TeachingGuide.tsx   → MBTI 교수법 가이드
    /Warnings.tsx        → 주의사항 카드
```

## 2-레이어 분석 모델

### Layer 1: WHAT — 6차원 영적 성장 분석 (체크리스트 기반)
"어떤 과를, 어떤 순서로, 얼마나 반복할지"를 결정한다.

| 차원 | 계산 입력 | 역할 |
|---|---|---|
| 수용성 | openness + believe_god + bible_interest | 시작점/속도 결정 |
| 영적 감수성 | believe_god + believe_spirit + believe_soul | 핵심교리 vs 역사적 접근 분기 |
| 내적 안정성 | growth_env + economic + health_mental + health_physical | 돌봄 필요도 판단 |
| 관계 강도 | trust_level + family_faith + openness | 관계형성 시간 배분 |
| 유지 안정성 | risk_factors 개수 역산 | 압축코스 여부 결정 |
| 성장 잠재력 | interests + bible_interest + openness | 진행 속도/심화 수준 |

### Layer 2: HOW — MBTI 교수법 매칭
"어떤 방식으로, 어떤 환경에서 가르칠지"를 결정한다.

- E/I → 수업 형태
- S/N → 설명 방식
- T/F → 설득 포인트
- J/P → 진행 구조
- MBTI 미입력 시 → 교수법 가이드 섹션 숨김

## 7개 매칭 유형
- 🕊️ 영적 수용형: 감수성 ≥ 70 AND 수용성 ≥ 60
- 🤝 관계 형성 우선형: 수용성 < 40
- 🔍 논리적 탐구형: 감수성 < 40 AND 수용성 ≥ 40
- 💛 돌봄 회복형: 안정성 < 40
- ⚡ 핵심 압축형: 유지안정 < 40
- 🚀 성장 가속형: 잠재력 ≥ 70
- 📖 표준 양육형: 위 조건 해당 없음

## 설계 원칙
- 모바일 퍼스트 (인도자가 현장에서 사용)
- 클라이언트 사이드 계산 (DB 불필요, MVP)
- 커리큘럼 데이터 분리 (향후 추가/수정 용이)
- MBTI는 선택 입력 (없어도 핵심 기능 작동)
- 한국어 전용
