"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Image, ListImagesResponse } from "../../types/api";
import { ImageCard } from "../image-card";
import { SearchInput } from "../search-input";
import { FileUploadInput } from "../file-upload-input";
import { Flex, Group, SimpleGrid, Text } from "@mantine/core";

export const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);

  const fetchAllImages = useCallback(async () => {
    const imageData: ListImagesResponse = await fetch("/api/images").then(
      (res) => res.json()
    );

    setImages(imageData.images);
  }, []);

  useEffect(() => {
    fetchAllImages();
  }, []);

  const fetchImagesByFileName = useCallback(async (fileName: string) => {
    try {
      const imageResponse = await fetch(`/api/images?search=${fileName}`).then(
        (res) => res.json()
      );

      setImages(imageResponse.images);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDelete = useCallback(
    async (fileName: string) => {
      await fetch(`/api/images/${fileName}`, {
        method: "DELETE",
      });

      await fetchAllImages();
    },
    [fetchAllImages]
  );

  const searchOptions = useMemo(
    () => images?.map((image) => image.fileName),
    [images]
  );

  return (
    <Flex direction="column" gap="xl">
      <Group gap="xl" justify="space-between">
        <SearchInput
          onSearch={fetchImagesByFileName}
          disabled={!images.length}
          onClear={fetchAllImages}
          options={searchOptions}
        />
        <FileUploadInput onUpload={fetchAllImages} />
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }}>
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
