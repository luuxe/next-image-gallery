"use client";

import { useRef } from "react";

interface SearchInputProps {
  onSearch?: (fileName: string) => void;
  disabled?: boolean;
  onClear?: () => void;
}

export const SearchInput = ({
  onSearch,
  disabled,
  onClear,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        disabled={disabled}
        type="text"
        placeholder="Search images..."
        style={{
          padding: "4px",
          maxWidth: "40vw",
          flex: "1",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch?.(e.currentTarget.value);
          }
        }}
      />
      {inputRef.current?.value && (
        <button
          onClick={() => {
            handleClear();
            onClear?.();
          }}
        >
          Clear Search
        </button>
      )}
    </>
  );
};
