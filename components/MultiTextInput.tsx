'use client';

import { useState, KeyboardEvent } from 'react';

type MultiTextInputProps = {
  values: string[];
  onChange: (values: string[]) => void;
  label?: string;
  placeholder?: string;
};

export default function MultiTextInput({
  values,
  onChange,
  label = 'Enter items',
  placeholder = 'Type and press Enter...'
}: MultiTextInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (value: string) => {
    const trimmed = value.trim();
    if (trimmed && !values.includes(trimmed)) {
      onChange([...values, trimmed]);
    }
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAdd(inputValue);
    }
  };

  const removeItem = (val: string) => {
    onChange(values.filter((v) => v !== val));
  };

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-bold text-gray-700 mt-2">{label}</label>}
      <div className="relative bg-blue-50 shadow shadow-blue-600 rounded-2xl p-2 focus-within:border-blue-500">
        <div className="flex flex-wrap gap-2 mb-2">
          {values.map((val) => (
            <span
              key={val}
              className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full flex items-center gap-1"
            >
              {val}
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700"
                onClick={() => removeItem(val)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full focus:outline-none bg-transparent rounded-2xl text-sm text-gray-600 placeholder:text-gray-500 placeholder:italic"
        />
      </div>
    </div>
  );
}
