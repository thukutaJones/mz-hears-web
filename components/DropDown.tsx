"use client";

import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaAngleDown } from "react-icons/fa";

type OptionType = {
  [key: string]: any;
};

type DropdownProps = {
  title: string;
  options: OptionType[];
  handleSelectOption: (option: OptionType) => void;
  isLoading?: boolean;
  isOpen: boolean;
  setIsOpen: (toggle: boolean) => void;
  selectedOption?: string;
  variable: any
};

export default function Dropdown({
  title,
  options,
  handleSelectOption,
  isLoading = false,
  variable,
  isOpen,
  setIsOpen,
  selectedOption,
}: DropdownProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  const dropdownContent = (
    <div
      className="bg-white shadow-lg ring-1 ring-gray-400 ring-opacity-5 max-h-[150px] overflow-auto scroll-container rounded-md"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 9999,
      }}
    >
      {isLoading ? (
        <div className="w-full py-4 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="py-1">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                handleSelectOption(option);
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              {option[variable]}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative inline-block text-left w-full">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center gap-2 w-full bg-blue-50 shadow shadow-blue-600 rounded-2xl px-4 py-2 h-11 text-sm text-gray-700"
      >
        <p>{selectedOption || title}</p>
        <FaAngleDown size={20} color="blue" />
      </button>

      {mounted &&
        isOpen &&
        typeof window !== "undefined" &&
        ReactDOM.createPortal(dropdownContent, document.body)}
    </div>
  );
}
