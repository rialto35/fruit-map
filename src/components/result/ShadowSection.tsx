'use client';

interface Props {
  shadow: string;
}

export default function ShadowSection({ shadow }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#2C2417] to-[#3D3225] rounded-xl p-4 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🌓</span>
        <span className="text-[14px] font-bold text-[#E8E0D5]">그림자 영역</span>
      </div>
      <p className="text-[13px] text-[#C4B89C] leading-relaxed m-0">{shadow}</p>
    </div>
  );
}
