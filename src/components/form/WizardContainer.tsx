'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ChecklistData } from '@/lib/types';
import { STEPS, FIELD_CONFIG } from '@/lib/checklist-config';
import { computeDimensions } from '@/lib/dimensions';
import { generateMatching } from '@/lib/matching';
import { getTeachingMethod } from '@/lib/teaching-method';
import { getCrossInsights } from '@/lib/cross-analysis';
import StepIndicator from './StepIndicator';
import FieldRenderer from './FieldRenderer';

export default function WizardContainer() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ChecklistData>({});

  const currentStep = STEPS[step];
  const isLast = step === STEPS.length - 1;

  const setField = (key: string, value: string | string[]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const dims = computeDimensions(data);
    const match = generateMatching(dims, data);
    const teaching = getTeachingMethod(data.mbti);

    const crossInsights = getCrossInsights(match.dims);
    const payload = { data, dims, match, teaching, crossInsights };
    const encoded = btoa(encodeURIComponent(JSON.stringify(payload)));
    router.push(`/result?d=${encoded}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5] p-4">
      <div className="max-w-[560px] mx-auto bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="text-4xl mb-1">🍇</div>
          <h1 className="text-xl font-extrabold text-[#2C2417] my-1">열매 체크리스트</h1>
          <p className="text-xs text-[#8A7D6B] m-0">복음방 전/후 진단 · 맞춤 교육 설계</p>
        </div>

        {/* Step Indicator */}
        <StepIndicator steps={STEPS} currentStep={step} onStepClick={setStep} />

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-5 px-4 py-3 bg-[#FAF7F2] rounded-xl border-l-4 border-[#C4A573]">
          <span className="text-xl">{currentStep.icon}</span>
          <h2 className="text-base font-bold text-[#3D3225] m-0 flex-1">{currentStep.title}</h2>
          <span className="text-xs text-[#A69680] font-semibold">{step + 1}/{STEPS.length}</span>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-5 mb-6">
          {currentStep.fields.map(fn => {
            const cfg = FIELD_CONFIG[fn];
            if (!cfg) return null;
            return (
              <div key={fn} className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#3D3225] flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#C4A573] text-white text-[11px] font-bold shrink-0">
                    {fn}
                  </span>
                  {cfg.label}
                </label>
                {cfg.description && (
                  <p className="text-xs text-[#8A7D6B] m-0 ml-7">{cfg.description}</p>
                )}
                <FieldRenderer config={cfg} data={data} setField={setField} />
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#EDE7DF]">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-5 py-2.5 rounded-[10px] border-[1.5px] border-[#DDD5C9] bg-white text-sm font-semibold text-[#6B5D4D]"
            >
              ← 이전
            </button>
          )}
          <div className="flex-1" />
          {isLast ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-7 py-3 rounded-[10px] border-none bg-gradient-to-br from-[#7B61FF] to-[#5B4BC9] text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(123,97,255,0.3)]"
            >
              📊 분석 실행
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-7 py-2.5 rounded-[10px] border-none bg-[#C4A573] text-sm font-bold text-white"
            >
              다음 →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
