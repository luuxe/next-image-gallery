import styles from "./page.module.css";
import { Gallery } from "./components/gallery";
import { ListImagesResponse } from "./types/api";

export default async function Home() {
  const imageData: ListImagesResponse = await fetch(
    "http://localhost:3000/api/images"
  ).then((res) => res.json());

  const initialImages = imageData.images;
  return (
    <main className={styles.page}>
      <Gallery initialImages={initialImages} />
    </main>
  );
}
