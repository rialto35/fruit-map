'use client';

interface Props {
  message: string;
}

export default function OneLineMessage({ message }: Props) {
  if (!message) return null;
  return (
    <div className="bg-gradient-to-r from-[#F8F6FF] to-[#FFF8F0] rounded-2xl px-5 py-4 mb-6 text-center border border-[#E8E0F0]">
      <p className="text-[11px] text-[#8A7D9A] mb-1 font-semibold">이 열매를 움직이는 한 마디</p>
      <p className="text-[15px] font-bold text-[#3D3270] leading-relaxed m-0">&ldquo;{message}&rdquo;</p>
    </div>
  );
}
