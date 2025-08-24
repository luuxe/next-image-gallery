"use client";

import { ImageCard } from "./image-card";

interface GalleryProps {
  imageUrls?: string[];
}

export const Gallery = ({ imageUrls }: GalleryProps) => {

    if (imageUrls?.length === 0) {
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
        {imageUrls?.map((url, index) => (
            <ImageCard key={index} url={url} />
        ))}
        </div>
    );
}