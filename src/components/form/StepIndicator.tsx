'use client';

import type { StepConfig } from '@/lib/types';

interface Props {
  steps: StepConfig[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

export default function StepIndicator({ steps, currentStep, onStepClick }: Props) {
  return (
    <div className="flex justify-between mb-5 gap-1">
      {steps.map((s, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onStepClick(i)}
          className={`flex-1 flex flex-col items-center gap-1 py-2 px-0.5 border-none bg-transparent cursor-pointer rounded-lg transition-all ${
            i === currentStep ? 'bg-[#F5F0E8]' : ''
          } ${i < currentStep ? 'opacity-70' : ''}`}
        >
          <span className="text-base">{i < currentStep ? '✓' : s.icon}</span>
          <span className="text-[9px] text-[#6B5D4D] font-semibold whitespace-nowrap">{s.title}</span>
        </button>
      ))}
    </div>
  );
}
