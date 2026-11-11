import styles from "./Portafolio.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <p className={styles.actress}>Karla Garrido</p>
      <ul className={styles.characteristics}>
        <li>Actriz Mexicana</li>
        <li>Estatura: 1.60m</li>
        <li>Peso: 47kg</li>
      </ul>

      <ul className={styles.characteristics}>
        <li>Idiomas:</li>
        <li>
          <ul>
            <li>Español Latinoamericano</li>
            <li>Ingles: 90%</li>
          </ul>
        </li>
        <li className={styles.pass}>Pasaporte y Visa vigentes</li>
      </ul>
    </div>
  );
}
