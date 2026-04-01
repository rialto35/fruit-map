'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import type { Dimension } from '@/lib/types';

interface Props {
  dimensions: Dimension[];
}

export default function DimensionRadarChart({ dimensions }: Props) {
  const radarData = dimensions.map(d => ({
    subject: d.name,
    score: d.score,
    fullMark: 100,
  }));

  return (
    <div className="bg-[#FAF7F2] rounded-2xl px-2 py-5 mb-6">
      <h3 className="text-[15px] font-bold text-[#3D3225] mb-3 pl-3">📊 6차원 분석</h3>
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#DDD5C9" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#5C4F3D' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
          <Radar name="점수" dataKey="score" stroke="#7B61FF" fill="#7B61FF" fillOpacity={0.25} strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-2 px-3">
        {dimensions.map((dm, i) => (
          <div key={i} className="flex-[1_1_45%] flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg text-xs">
            <span>{dm.icon}</span>
            <span className="font-semibold text-[#3D3225]">{dm.name}</span>
            <span className="ml-auto font-bold" style={{ color: dm.color }}>{dm.score}점</span>
            <span className="text-[10px] text-[#8A7D6B]">{dm.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
