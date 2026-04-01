import dynamic from 'next/dynamic';

const ResultContent = dynamic(() => import('@/components/result/ResultContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3EE] via-[#EDE7DF] to-[#E8E0D5]">
      <p className="text-[#8A7D6B]">로딩 중...</p>
    </div>
  ),
});

export default function ResultPage() {
  return <ResultContent />;
}
