'use client';

import type { SelectOption } from '@/lib/types';

interface Props {
  options: (string | SelectOption)[];
  value: string | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SelectField({ options, value, onChange, placeholder }: Props) {
  const isObj = options.length > 0 && typeof options[0] === 'object';
  return (
    <select
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      className="w-full px-3.5 py-2.5 border-[1.5px] border-[#DDD5C9] rounded-[10px] text-sm text-[#3D3225] bg-[#FAFAF7] outline-none appearance-none"
    >
      <option value="" disabled>{placeholder || '선택하세요'}</option>
      {options.map((opt, i) => {
        if (isObj) {
          const o = opt as SelectOption;
          return <option key={i} value={String(o.value)}>{o.label}</option>;
        }
        return <option key={i} value={opt as string}>{opt as string}</option>;
      })}
    </select>
  );
}
