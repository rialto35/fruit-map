'use client';

interface Props {
  hookQuestions: string[];
  avoidQuestions: string[];
}

export default function QuestionGuide({ hookQuestions, avoidQuestions }: Props) {
  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="bg-[#E8F5E9] rounded-xl p-3.5 border border-[#C8E6C9]">
        <div className="text-[12px] font-bold text-[#2E7D32] mb-2">💬 관심 끄는 질문</div>
        <ul className="m-0 pl-3 flex flex-col gap-1.5">
          {hookQuestions.map((q, i) => (
            <li key={i} className="text-[12px] text-[#1B5E20] leading-relaxed">&ldquo;{q}&rdquo;</li>
          ))}
        </ul>
      </div>
      <div className="bg-[#FFF0F0] rounded-xl p-3.5 border border-[#FFCDD2]">
        <div className="text-[12px] font-bold text-[#C62828] mb-2">🚫 피해야 할 질문</div>
        <ul className="m-0 pl-3 flex flex-col gap-1.5">
          {avoidQuestions.map((q, i) => (
            <li key={i} className="text-[12px] text-[#B71C1C] leading-relaxed">&ldquo;{q}&rdquo;</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
