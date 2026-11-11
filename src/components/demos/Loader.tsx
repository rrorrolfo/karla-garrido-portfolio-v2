import styles from "./Loader.module.css";

export default function Loader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className={isLoading ? styles.fullScreen : "is_hidden"}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
}
