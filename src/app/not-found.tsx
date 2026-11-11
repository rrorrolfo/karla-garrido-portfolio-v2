import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <p className={styles.code}>404</p>
      <p className={`${styles.code} ${styles.message}`}>No se encontró la página que buscas.</p>
      <Link href="/" className={styles.returnButton}>
        Ir a la página principal
      </Link>
    </div>
  );
}
