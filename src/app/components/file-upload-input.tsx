"use client";

import { useCallback, useRef, useState } from "react";

interface FileUploadInputProps {
  onUpload?: (bleh: any) => void;
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

      await fetch("http://localhost:3000/api/images/upload", {
        method: "POST",
        body: formData,
      });

      onUpload?.("bleh");
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
      <button
        type="submit"
        style={{ padding: "1px 4px" }}
        onClick={onUploadClick}
      >
        Upload
      </button>
    </>
  );
};
