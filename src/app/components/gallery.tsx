"use client";

import { useCallback, useEffect, useState } from "react";
import { Image, ListImagesResponse } from "../types/api";
import { ImageCard } from "./image-card";
import { SearchInput } from "./search-input";
import { FileUploadInput } from "./file-upload-input";
import styles from "./gallery.module.css";

interface GalleryProps {
  initialImages?: Image[];
}

export const Gallery = ({ initialImages = [] }: GalleryProps) => {
  const [images, setImages] = useState<Image[]>(initialImages);

  const refetchImages = useCallback(async () => {
    const imageData: ListImagesResponse = await fetch(
      "http://localhost:3000/api/images"
    ).then((res) => res.json());

    setImages(imageData.images);
  }, []);

  const fetchImagesByFileName = useCallback(async (fileName: string) => {
    try {
      const imageResponse = await fetch(
        `http://localhost:3000/api/images/${fileName}`
      ).then((res) => res.json());

      setImages(imageResponse.images);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDelete = useCallback(
    async (fileName: string) => {
      await fetch(`http://localhost:3000/api/images/${fileName}`, {
        method: "DELETE",
      });

      await refetchImages();
    },
    [refetchImages]
  );

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "32px",
      }}
    >
      <section className={styles.inputSection}>
        <SearchInput
          onSearch={fetchImagesByFileName}
          disabled={!images.length}
          onClear={refetchImages}
        />
        <FileUploadInput onUpload={refetchImages} />
      </section>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        {images.length ? (
          images.map((image) => (
            <ImageCard
              key={image.fileName}
              image={image}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No images to display.</p>
        )}
      </section>
    </main>
  );
};
