"use client";

import { Select } from "@mantine/core";

interface SearchInputProps {
  onSearch?: (fileName: string) => void;
  disabled?: boolean;
  onClear?: () => void;
  options?: string[];
}

export const SearchInput = ({
  onSearch,
  disabled,
  onClear,
  options = [],
}: SearchInputProps) => (
  <Select
    placeholder="Search images..."
    data={options}
    searchable
    clearable
    style={{ flex: 1, maxWidth: 400 }}
    disabled={disabled}
    onChange={(value) => {
      if (value) {
        onSearch?.(value);
      } else {
        onClear?.();
      }
    }}
  />
);
