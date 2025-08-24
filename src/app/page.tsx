import styles from "./page.module.css";
import { Gallery } from "./components/gallery/";

export default async function Home() {
  return (
    <main className={styles.page}>
      <Gallery />
    </main>
  );
}
