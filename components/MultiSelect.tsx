"use client";

import { useState } from "react";

export default function MultiSelect<T extends Record<string, any>>({
  options,
  selected,
  onChange,
  labelKey,
  label = "Select",
  placeholder = "Search...",
}: {
  options: any[];
  selected: any;
  onChange: any;
  labelKey: string;
  label: string;
  placeholder?: string;
}) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const getLabel = (item: T) => String(item[labelKey]);

  const filtered = options.filter(
    (opt) =>
      getLabel(opt).toLowerCase().includes(inputValue.toLowerCase()) &&
      !selected.some((sel: any) => getLabel(sel) === getLabel(opt))
  );

  const addItem = (item: T) => {
    onChange([...selected, item]);
    setInputValue("");
  };

  const removeItem = (item: T) => {
    onChange(selected.filter((sel: any) => getLabel(sel) !== getLabel(item)));
  };

  return (
    <div className="w-full text-xs">
      {label && (
        <label className="block text-sm font-bold text-gray-700 mt-2">
          {label}
        </label>
      )}
      <div className="relative border border-gray-300 rounded-md p-2 focus-within:border-blue-500 bg-white">
        <div className="flex flex-wrap gap-2 mb-1">
          {selected.map((item: any, index: number) => (
            <span
              key={index?.toString()}
              className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full flex items-center gap-1"
            >
              {getLabel(item)}
              <button
                onClick={() => removeItem(item)}
                type="button"
                className="text-blue-500 hover:text-blue-700"
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full focus:outline-none text-sm text-gray-600 placeholder:text-gray-500 placeholder:italic"
        />
        {isFocused && filtered.length > 0 && (
          <ul className="absolute text-gray-500 text-xs z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-48 overflow-auto">
            {filtered.map((item) => (
              <li
                key={getLabel(item)}
                className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm"
                onClick={() => addItem(item)}
              >
                {getLabel(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
