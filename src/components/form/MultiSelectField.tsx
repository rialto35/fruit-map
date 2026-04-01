'use client';

interface Props {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

export default function MultiSelectField({ options, value = [], onChange }: Props) {
  const toggle = (opt: string) => {
    onChange(value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt]);
  };

  return (
    <div className="flex flex-wrap gap-2 pl-7">
      {options.map((opt, i) => (
        <button
          key={i}
          type="button"
          onClick={() => toggle(opt)}
          className={`px-3.5 py-[7px] rounded-[20px] border-[1.5px] text-[13px] transition-all duration-150 ${
            value.includes(opt)
              ? 'bg-[#C4A573] text-white border-[#C4A573] font-semibold'
              : 'bg-[#FAFAF7] text-[#5C4F3D] border-[#DDD5C9]'
          }`}
        >
          {value.includes(opt) && '✓ '}{opt}
        </button>
      ))}
    </div>
  );
}
