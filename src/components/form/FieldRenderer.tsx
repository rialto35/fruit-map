'use client';

import type { FieldConfig, ChecklistData } from '@/lib/types';
import SelectField from './SelectField';
import MultiSelectField from './MultiSelectField';

interface Props {
  config: FieldConfig;
  data: ChecklistData;
  setField: (key: string, value: string | string[]) => void;
}

export default function FieldRenderer({ config, data, setField }: Props) {
  if (config.type === 'composite') {
    return (
      <div className="flex flex-col gap-2.5 pl-7">
        {config.fields.map((f, i) => (
          <div key={i} className="flex flex-col gap-1">
            {f.label && <label className="text-xs font-semibold text-[#6B5D4D]">{f.label}</label>}
            {f.type === 'text' && (
              <input
                type="text"
                placeholder={f.placeholder}
                value={(data[f.key as keyof ChecklistData] as string) || ''}
                onChange={e => setField(f.key, e.target.value)}
                className="w-full px-3.5 py-2.5 border-[1.5px] border-[#DDD5C9] rounded-[10px] text-sm text-[#3D3225] bg-[#FAFAF7] outline-none"
              />
            )}
            {f.type === 'number' && (
              <input
                type="number"
                placeholder={f.placeholder}
                value={(data[f.key as keyof ChecklistData] as string) || ''}
                onChange={e => setField(f.key, e.target.value)}
                min={1}
                max={120}
                className="w-full px-3.5 py-2.5 border-[1.5px] border-[#DDD5C9] rounded-[10px] text-sm text-[#3D3225] bg-[#FAFAF7] outline-none"
              />
            )}
            {f.type === 'select' && (
              <SelectField
                options={f.options || []}
                value={(data[f.key as keyof ChecklistData] as string) || undefined}
                onChange={v => setField(f.key, v)}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (config.type === 'select') {
    return (
      <SelectField
        options={config.options}
        value={(data[config.key as keyof ChecklistData] as string) || undefined}
        onChange={v => setField(config.key, v)}
      />
    );
  }

  if (config.type === 'multiselect') {
    return (
      <MultiSelectField
        options={config.options}
        value={(data[config.key as keyof ChecklistData] as string[]) || []}
        onChange={v => setField(config.key, v)}
      />
    );
  }

  if (config.type === 'textarea') {
    return (
      <textarea
        placeholder={config.placeholder}
        value={(data[config.key as keyof ChecklistData] as string) || ''}
        onChange={e => setField(config.key, e.target.value)}
        rows={4}
        className="w-full px-3.5 py-2.5 border-[1.5px] border-[#DDD5C9] rounded-[10px] text-sm text-[#3D3225] bg-[#FAFAF7] outline-none resize-y leading-relaxed"
      />
    );
  }

  return null;
}
