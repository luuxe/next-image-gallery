"use client";

import { useCallback, useEffect, useState } from "react";
import { Image, ListImagesResponse } from "../types/api";
import { ImageCard } from "./image-card";

export const Gallery = () => {

const [images, setImages] = useState<Image[]>()

const fetchImages = async () => {
    const imageData: ListImagesResponse = await fetch('http://localhost:3000/api/images').then(res => res.json());
    
    setImages(imageData.images)
}

useEffect(() => void fetchImages(), [])

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