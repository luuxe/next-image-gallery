"use client";

import { Button } from "@mantine/core";
import { useCallback, useRef, useState } from "react";

interface FileUploadInputProps {
  onUpload?: () => void;
}

export const FileUploadInput = ({ onUpload }: FileUploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleUploadFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileToUpload = e.target.files?.[0];

      if (!fileToUpload) return;

      const formData = new FormData();
      formData.append("image", fileToUpload);

      await fetch("/api/images/upload", {
        method: "POST",
        body: formData,
      });

      onUpload?.();
    },
    [onUpload]
  );

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        name="file"
        accept="image/*"
        onChange={handleUploadFile}
        style={{ display: "none" }}
      />
      <Button variant="filled" onClick={onUploadClick}>
        Upload Image
      </Button>
    </>
  );
};
