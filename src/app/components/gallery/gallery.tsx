"use client";

import { useCallback, useMemo, useState } from "react";
import { Image, ListImagesResponse } from "../../types/api";
import { ImageCard } from "../image-card";
import { SearchInput } from "../search-input";
import { FileUploadInput } from "../file-upload-input";
import { Flex, Group, SimpleGrid, Text } from "@mantine/core";

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

  const searchOptions = useMemo(
    () => images.map((image) => image.fileName),
    [images]
  );

  return (
    <Flex direction="column" gap="xl">
      <Group gap="xl" justify="space-between">
        <SearchInput
          onSearch={fetchImagesByFileName}
          disabled={!images.length}
          onClear={refetchImages}
          options={searchOptions}
        />
        <FileUploadInput onUpload={refetchImages} />
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}>
        {images.length ? (
          images.map((image) => (
            <ImageCard
              key={image.fileName}
              image={image}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <Text size="lg">No images to display.</Text>
        )}
      </SimpleGrid>
    </Flex>
  );
};
