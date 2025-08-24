"use client";

import { useCallback } from "react";
import { Image } from "../types/api";
import { ImageCard } from "./image-card";

interface GalleryProps {
  images: Image[];
}

export const Gallery = ({ images }: GalleryProps) => {

    const handleDelete = useCallback(async (fileName: string) => {
        console.log(`${fileName} clicked to delete`)

        await fetch(`http://localhost:3000/api/images/${fileName}`, {
            method: "DELETE"
        })
    }, []);

    if (images?.length === 0) {
        return <p>No images to display.</p>;
    }

    return (
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            width: "100%",
            overflowY: "auto",
        }}
        >
        {images?.map((img, index) => (
            <ImageCard key={index} image={img} onDelete={handleDelete} />
        ))}
        </div>
    );
}