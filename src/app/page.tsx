import styles from "./page.module.css";
import { Gallery } from "./components/gallery";
import { SearchInput } from "./components/search-input";
import { FileUploadInput } from "./components/file-upload-input";
import { ListImagesResponse } from "./types/api";

export default async function Home() {
  const imageData: ListImagesResponse = await fetch('http://localhost:3000/api/images').then(res => res.json());
  const images = imageData.images || [];

  return (
    <div className={styles.page}>
      <section className={styles.inputSection}>
        <SearchInput />
        <FileUploadInput />
      </section>
      <Gallery images={images}/>
    </div>
  );
}
