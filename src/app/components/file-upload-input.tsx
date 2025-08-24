"use client";

import { useCallback, useRef, useState } from "react";

interface FileUploadInputProps {
  onUpload?: (bleh: any) => void;
}

export const FileUploadInput = ({ onUpload }: FileUploadInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFileToUpload(e.target.files[0]);
      }
    },
    []
  );

  const handleUploadFile = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!fileToUpload) return;

      const formData = new FormData();
      formData.append("image", fileToUpload);

      await fetch("http://localhost:3000/api/images/upload", {
        method: "POST",
        body: formData,
      });

      onUpload?.("bleh");

      if (inputRef.current?.value) {
        inputRef.current.value = "";
      }
    },
    [fileToUpload]
  );

  return (
    <form onSubmit={handleUploadFile}>
      <input
        type="file"
        ref={inputRef}
        name="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button type="submit" style={{ padding: "1px 4px" }}>
        Upload
      </button>
    </form>
  );
};
