"use client"

import { useCallback, useState } from "react";

export const FileUploadInput = () => {
    const [fileToUpload, setFileToUpload] = useState<File | null>(null);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileToUpload(e.target.files[0]);
        }
    }, []);

    const handleUploadFile = useCallback(async () => {
        if (!fileToUpload) return;

        const formData = new FormData();
        formData.append("image", fileToUpload);

        // TODO: replace with actual upload endpoint
    }, [fileToUpload]);

    return (
       <form onSubmit={handleUploadFile}>
        <input type="file" name="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" style={{ padding: '1px 4px'}}>Upload</button>
       </form>
    );
}