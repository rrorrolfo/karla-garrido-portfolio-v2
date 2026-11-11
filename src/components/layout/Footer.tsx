import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.copyright}>
      <p>
        &copy; 2019 Karla Garrido |{" "}
        <span>
          <a href="http://rodolfoperez.info/" target="_blank" rel="noopener noreferrer">
            Crafted by rrorrolfo
          </a>
        </span>
      </p>
    </div>
  );
}
