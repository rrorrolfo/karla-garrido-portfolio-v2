import Link from "next/link";
import styles from "./Title.module.css";

export default function Title() {
  return (
    <h2 className={styles.title}>
      <Link href="/">Karla Garrido</Link>
    </h2>
  );
}
