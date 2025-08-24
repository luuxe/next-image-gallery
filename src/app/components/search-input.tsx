"use client";

import { useCallback } from "react";

export const SearchInput = () => {
    //TODO: update gallery images based on search or push to new page with results
    const fetchImagesByFileName = useCallback(async (fileName: string) => {
        console.log(`Searching for images with filename: ${fileName}`);
        try {
            const imageResponse = await fetch(`http://localhost:3000/api/images/${fileName}`).then(res => res.json());
    
            console.log(imageResponse);
        } catch (error) {
            console.error(error)
        }
    }, [])
    
    return (
        <input
        type="text"
        placeholder="Search images..."
        style={{
            padding: "4px",
            maxWidth: "40vw",
            flex: "1",
        }}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                fetchImagesByFileName(e.currentTarget.value)
            }
        }}
        />
    );
}