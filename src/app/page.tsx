import styles from "./page.module.css";
import { Gallery } from "./components/gallery";
import { SearchInput } from "./components/search-input";
import { FileUploadInput } from "./components/file-upload-input";

export default function Home() {

  return (
    <div className={styles.page}>
      <section className={styles.inputSection}>
        <SearchInput />
        <FileUploadInput />
      </section>
      <Gallery />
    </div>
  );
}
