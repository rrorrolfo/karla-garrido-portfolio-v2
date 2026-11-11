import Title from "./Title";
import Nav from "./Nav";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Title />
      <Nav />
    </div>
  );
}
