import NextImage from "next/image";
import { Image as ImageType } from "../types/api";
import { Card, Text, Button, Group, Flex } from "@mantine/core";
import { Image as MantineImage } from "@mantine/core";

interface ImageCardProps {
  image: ImageType;
  onDelete?: (fileName: string) => void;
}
export const ImageCard = ({ image, onDelete }: ImageCardProps) => {
  const { fileName, url } = image;

  const handleDelete = (fileName: string) => onDelete?.(fileName);

  return (
    <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <MantineImage
          src={url}
          alt={fileName}
          height={400}
          component={NextImage}
          width={200}
          unoptimized
        />
        <Flex
          justify="space-between"
          align="center"
          gap="md"
          style={{ padding: 10 }}
        >
          <Text size="sm" c="dimmed" flex="1" lineClamp={1}>
            {fileName}
          </Text>

          <Button
            color="red"
            radius="md"
            size="xs"
            onClick={() => handleDelete(fileName)}
          >
            Delete
          </Button>
        </Flex>
      </Card.Section>
    </Card>
  );
};
